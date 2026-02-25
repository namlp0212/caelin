# Package Image Upload Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Let admin staff upload, preview, and replace thumbnail and background images for concept packages directly from the admin Package Management modal.

**Architecture:** Two new `POST /packages/{id}/thumbnail` and `POST /packages/{id}/background` multipart endpoints are added to `PackageController`, reusing the existing `FileStorageService` (same pattern as outfit images). The frontend saves metadata first (existing JSON PUT/POST), then uploads any queued image files, then refreshes the list. Package cards in the grid display the thumbnail when available.

**Tech Stack:** Spring Boot 3 (Java 21), Angular 17 standalone components, signals, Tailwind CSS, `FileStorageService` stores files to `./uploads/packages/`, served at `http://localhost:8080/api/files/packages/`.

---

### Task 1 — Backend: add thumbnail + background upload endpoints

**Files:**
- Modify: `backend/src/main/java/com/caeline/rental/controller/PackageController.java`

**Step 1: Inject `FileStorageService` and add the `MultipartFile` import**

Replace the top of `PackageController.java`:

```java
package com.caeline.rental.controller;

import com.caeline.rental.dto.response.ApiResponse;
import com.caeline.rental.model.ConceptPackage;
import com.caeline.rental.model.TimeSlot;
import com.caeline.rental.repository.ConceptPackageRepository;
import com.caeline.rental.repository.TimeSlotRepository;
import com.caeline.rental.service.FileStorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/packages")
@RequiredArgsConstructor
public class PackageController {

    private final ConceptPackageRepository packageRepository;
    private final TimeSlotRepository timeSlotRepository;
    private final FileStorageService fileStorageService;
```

**Step 2: Extend `update()` to also map `thumbnailUrl` and `backgroundUrl`**

Inside the existing `update()` method, add these two lines after `pkg.setActive(updated.isActive());`:

```java
        if (updated.getThumbnailUrl() != null) pkg.setThumbnailUrl(updated.getThumbnailUrl());
        if (updated.getBackgroundUrl() != null) pkg.setBackgroundUrl(updated.getBackgroundUrl());
```

**Step 3: Add the two image upload endpoints at the bottom of the class (before the closing `}`)**

```java
    @PostMapping(value = "/{id}/thumbnail", consumes = "multipart/form-data")
    @PreAuthorize("hasAnyRole('ADMIN', 'STAFF')")
    public ResponseEntity<ApiResponse<ConceptPackage>> uploadThumbnail(
            @PathVariable Long id,
            @RequestParam MultipartFile file) throws Exception {
        ConceptPackage pkg = packageRepository.findById(id).orElseThrow();
        if (pkg.getThumbnailUrl() != null) fileStorageService.delete(pkg.getThumbnailUrl());
        pkg.setThumbnailUrl(fileStorageService.store(file, "packages"));
        return ResponseEntity.ok(ApiResponse.ok("Thumbnail updated", packageRepository.save(pkg)));
    }

    @PostMapping(value = "/{id}/background", consumes = "multipart/form-data")
    @PreAuthorize("hasAnyRole('ADMIN', 'STAFF')")
    public ResponseEntity<ApiResponse<ConceptPackage>> uploadBackground(
            @PathVariable Long id,
            @RequestParam MultipartFile file) throws Exception {
        ConceptPackage pkg = packageRepository.findById(id).orElseThrow();
        if (pkg.getBackgroundUrl() != null) fileStorageService.delete(pkg.getBackgroundUrl());
        pkg.setBackgroundUrl(fileStorageService.store(file, "packages"));
        return ResponseEntity.ok(ApiResponse.ok("Background updated", packageRepository.save(pkg)));
    }
```

**Step 4: Verify backend compiles**

```bash
cd backend
JAVA_HOME=/Users/lenam/Library/Java/JavaVirtualMachines/ms-21.0.7/Contents/Home \
  mvn compile -q
```

Expected: `BUILD SUCCESS` with no errors.

**Step 5: Commit**

```bash
git add backend/src/main/java/com/caeline/rental/controller/PackageController.java
git commit -m "feat: add thumbnail and background image upload endpoints for packages"
```

---

### Task 2 — Frontend: add 2 upload methods to `api.service.ts`

**Files:**
- Modify: `frontend/src/app/core/services/api.service.ts`

**Step 1: Add the two methods after `updatePackage`**

```typescript
  uploadPackageThumbnail(id: number, file: File): Observable<ConceptPackage> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<ApiResponse<ConceptPackage>>(`${this.base}/packages/${id}/thumbnail`, fd)
      .pipe(map(r => r.data));
  }

  uploadPackageBackground(id: number, file: File): Observable<ConceptPackage> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<ApiResponse<ConceptPackage>>(`${this.base}/packages/${id}/background`, fd)
      .pipe(map(r => r.data));
  }
```

**Step 2: Verify frontend compiles**

```bash
cd frontend
npx ng build --configuration development 2>&1 | grep -E "(ERROR|Application bundle)"
```

Expected: `Application bundle generation complete.`

**Step 3: Commit**

```bash
git add frontend/src/app/core/services/api.service.ts
git commit -m "feat: add uploadPackageThumbnail and uploadPackageBackground API methods"
```

---

### Task 3 — Frontend: image upload UI and save flow in packages component

**Files:**
- Modify: `frontend/src/app/admin/packages/packages.component.ts`

**Step 1: Add `thumbnailFile` and `backgroundFile` signals and preview signals to the component class**

Add these fields after `editingPkg: ConceptPackage | null = null;`:

```typescript
  thumbnailFile: File | null = null;
  backgroundFile: File | null = null;
  thumbnailPreview = signal<string>('');
  backgroundPreview = signal<string>('');
```

**Step 2: Reset them in `closeForm()`**

Add inside `closeForm()` after `this.form = this.defaultForm();`:

```typescript
    this.thumbnailFile = null;
    this.backgroundFile = null;
    this.thumbnailPreview.set('');
    this.backgroundPreview.set('');
```

**Step 3: Populate previews in `editPkg()`**

Add inside `editPkg()` after `this.showForm.set(true);`:

```typescript
    this.thumbnailPreview.set(pkg.thumbnailUrl || '');
    this.backgroundPreview.set(pkg.backgroundUrl || '');
```

**Step 4: Add file-selection handlers to the component class**

```typescript
  onThumbnailSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.thumbnailFile = file;
    this.thumbnailPreview.set(URL.createObjectURL(file));
  }

  onBackgroundSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.backgroundFile = file;
    this.backgroundPreview.set(URL.createObjectURL(file));
  }
```

**Step 5: Fix `savePkg()` to upload images after the metadata save**

Replace the existing `savePkg()` method with:

```typescript
  savePkg() {
    this.saving.set(true);
    const isEdit = !!this.editingPkg;
    const save$ = isEdit
      ? this.api.updatePackage(this.editingPkg!.id, this.form as any)
      : this.api.createPackage(this.form as any);

    save$.subscribe({
      next: pkg => {
        const uploadThumbnail$ = this.thumbnailFile
          ? this.api.uploadPackageThumbnail(pkg.id, this.thumbnailFile)
          : null;
        const uploadBackground$ = this.backgroundFile
          ? this.api.uploadPackageBackground(pkg.id, this.backgroundFile)
          : null;

        const finalize = (finalPkg: ConceptPackage) => {
          if (isEdit) {
            this.packages.update(list => list.map(p => p.id === finalPkg.id ? finalPkg : p));
          } else {
            this.packages.update(list => [...list, finalPkg]);
          }
          this.closeForm();
          this.saving.set(false);
        };

        if (uploadThumbnail$ && uploadBackground$) {
          uploadThumbnail$.subscribe({
            next: withThumb => uploadBackground$.subscribe({
              next: finalize,
              error: () => { finalize(withThumb); }
            }),
            error: () => {
              uploadBackground$?.subscribe({ next: finalize, error: () => { finalize(pkg); } });
            }
          });
        } else if (uploadThumbnail$) {
          uploadThumbnail$.subscribe({ next: finalize, error: () => { finalize(pkg); } });
        } else if (uploadBackground$) {
          uploadBackground$.subscribe({ next: finalize, error: () => { finalize(pkg); } });
        } else {
          finalize(pkg);
        }
      },
      error: () => this.saving.set(false)
    });
  }
```

**Step 6: Add image upload UI sections to the modal template**

Inside the form `<form (ngSubmit)="savePkg()" class="space-y-4">`, add the following block after the `Active` checkbox and before the action buttons (`<div class="flex gap-3 pt-2">`):

```html
              <!-- Thumbnail upload -->
              <div>
                <label class="form-label">Thumbnail Image</label>
                <div class="flex items-start gap-4">
                  @if (thumbnailPreview()) {
                    <img [src]="thumbnailPreview()" alt="Thumbnail"
                         class="w-24 h-16 object-cover rounded-xl border border-gray-200 flex-shrink-0">
                  } @else {
                    <div class="w-24 h-16 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-2xl text-gray-300 flex-shrink-0">🖼️</div>
                  }
                  <div class="flex-1">
                    <div class="border-2 border-dashed border-sakura-200 rounded-xl p-3 text-center cursor-pointer
                                hover:border-sakura-400 hover:bg-sakura-50 transition-colors"
                         (click)="thumbInput.click()">
                      <p class="text-xs text-gray-500">{{ thumbnailFile ? thumbnailFile.name : 'Click to upload thumbnail' }}</p>
                    </div>
                    <input #thumbInput type="file" accept="image/*" class="hidden"
                           (change)="onThumbnailSelected($event)">
                  </div>
                </div>
              </div>

              <!-- Background upload -->
              <div>
                <label class="form-label">Background Image</label>
                <div class="flex items-start gap-4">
                  @if (backgroundPreview()) {
                    <img [src]="backgroundPreview()" alt="Background"
                         class="w-24 h-16 object-cover rounded-xl border border-gray-200 flex-shrink-0">
                  } @else {
                    <div class="w-24 h-16 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-2xl text-gray-300 flex-shrink-0">🌄</div>
                  }
                  <div class="flex-1">
                    <div class="border-2 border-dashed border-sakura-200 rounded-xl p-3 text-center cursor-pointer
                                hover:border-sakura-400 hover:bg-sakura-50 transition-colors"
                         (click)="bgInput.click()">
                      <p class="text-xs text-gray-500">{{ backgroundFile ? backgroundFile.name : 'Click to upload background' }}</p>
                    </div>
                    <input #bgInput type="file" accept="image/*" class="hidden"
                           (change)="onBackgroundSelected($event)">
                  </div>
                </div>
              </div>
```

**Step 7: Verify frontend compiles**

```bash
cd frontend
npx ng build --configuration development 2>&1 | grep -E "(ERROR|Application bundle)"
```

Expected: `Application bundle generation complete.`

**Step 8: Commit**

```bash
git add frontend/src/app/admin/packages/packages.component.ts
git commit -m "feat: add thumbnail and background image upload UI to package modal"
```

---

### Task 4 — Frontend: show thumbnail on package cards

**Files:**
- Modify: `frontend/src/app/admin/packages/packages.component.ts` (template only)

**Step 1: Add thumbnail banner at the top of each package card**

In the package card `<div class="card p-6">`, insert a thumbnail banner **before** the `<div class="flex items-start justify-between mb-4">` block:

```html
              @if (pkg.thumbnailUrl) {
                <div class="-mx-6 -mt-6 mb-4 h-32 rounded-t-2xl overflow-hidden">
                  <img [src]="pkg.thumbnailUrl" [alt]="pkg.name" class="w-full h-full object-cover">
                </div>
              }
```

**Step 2: Verify frontend compiles**

```bash
cd frontend
npx ng build --configuration development 2>&1 | grep -E "(ERROR|Application bundle)"
```

Expected: `Application bundle generation complete.`

**Step 3: Commit**

```bash
git add frontend/src/app/admin/packages/packages.component.ts
git commit -m "feat: show thumbnail image on package admin cards"
```

---

### Task 5 — Verify end-to-end

**Step 1: Start backend**

```bash
JAVA_HOME=/Users/lenam/Library/Java/JavaVirtualMachines/ms-21.0.7/Contents/Home \
  mvn -f backend/pom.xml spring-boot:run > /tmp/backend.log 2>&1 &
sleep 25 && grep "Started RentalApplication" /tmp/backend.log
```

Expected: `Started RentalApplication in X seconds`

**Step 2: Start frontend**

```bash
cd frontend && npx ng serve &
```

**Step 3: Manual smoke test**

1. Login at `http://localhost:4200/admin`
2. Go to **Packages**
3. Click **Edit** on any package
4. Click the Thumbnail dropzone → pick any image file → preview appears
5. Click the Background dropzone → pick any image file → preview appears
6. Click **Update** → form closes → the package card now shows the thumbnail banner

**Step 4: Test create flow**

1. Click **+ Add Package** → fill required fields
2. Pick thumbnail and background images
3. Click **Create** → new package card appears with thumbnail

**Step 5: Push to remote**

```bash
git push
```
