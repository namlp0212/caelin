# Package Image Upload — Design

**Date:** 2026-02-25
**Feature:** Upload and edit thumbnail + background images for concept packages in the admin panel.

## Context

`ConceptPackage` already has `thumbnailUrl` and `backgroundUrl` string columns in the database, but the admin form has no UI for them and the backend update endpoint does not map them. Staff must manually seed these URLs via SQL.

## Approach

Dedicated image-upload endpoints per image slot (Option A), reusing the existing `FileStorageService`. The existing JSON `PUT /packages/{id}` endpoint stays untouched.

## Backend

### New endpoints in `PackageController`

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/packages/{id}/thumbnail` | Upload thumbnail image; stores file, sets `thumbnailUrl`, returns updated package |
| `POST` | `/packages/{id}/background` | Upload background image; stores file, sets `backgroundUrl`, returns updated package |

Both accept `multipart/form-data` with a single `file` part. Both require `ADMIN` or `STAFF` role. Files are stored under `./uploads/packages/` via `FileStorageService`.

### Update to `PackageController.update()`

Extend the existing `PUT /packages/{id}` to also accept and map `thumbnailUrl` and `backgroundUrl` string fields (for clearing or direct URL entry if needed).

## Frontend

### `api.service.ts`
- `uploadPackageThumbnail(id: number, file: File): Observable<ConceptPackage>`
- `uploadPackageBackground(id: number, file: File): Observable<ConceptPackage>`

### `packages.component.ts` — modal changes

Add below the existing form fields:

**Thumbnail section**
- Shows current thumbnail preview (`<img>` from `pkg.thumbnailUrl`) when editing
- Click-to-upload dropzone; selecting a file shows a local `URL.createObjectURL()` preview

**Background section**
- Same pattern for `backgroundUrl`

**Save flow**
1. Call `createPackage` / `updatePackage` (existing JSON) to save metadata → get back package with ID
2. If thumbnail file selected → `uploadPackageThumbnail(id, file)`
3. If background file selected → `uploadPackageBackground(id, file)`
4. Refresh package list and close modal

### Card grid

Package cards display the `thumbnailUrl` as a banner image at the top when available, replacing the plain emoji header.

## Files Changed

| File | Change |
|------|--------|
| `backend/.../controller/PackageController.java` | Add 2 endpoints, extend update() |
| `frontend/.../core/services/api.service.ts` | Add 2 upload methods |
| `frontend/.../admin/packages/packages.component.ts` | Image upload UI, preview, save flow, card thumbnail |
