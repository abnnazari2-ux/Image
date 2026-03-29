# Image Edit Studio

Production-structured Next.js 14 app for prompt-driven image editing.

## Features
- Drag-and-drop upload with server-side validation (type + size)
- Prompt-based editing with strength controls (subtle/balanced/strong)
- Async-style job pipeline with progress + status
- Before/after comparison and download
- Edit history with detail page
- Safety note displayed to users: upload only images you have permission to edit
- Provider abstraction for image editing and storage
- Prisma schema for PostgreSQL persistence model
- Mock mode works when no third-party image API is configured

## Stack
- Next.js App Router + TypeScript + Tailwind CSS
- API routes for upload, edit, job status, history
- Zod validation
- Prisma schema (`prisma/schema.prisma`)

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy env:
   ```bash
   cp .env.example .env
   ```
3. (Optional but recommended) setup PostgreSQL + Prisma:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```
4. Start app:
   ```bash
   npm run dev
   ```

## API Endpoints
- `POST /api/upload` - accepts image file form-data
- `POST /api/edit` - starts edit job from uploaded asset + prompt
- `GET /api/job/:id` - gets job status and assets
- `GET /api/history` - list recent jobs
- `DELETE /api/history/:id` - delete a job from history

## Mock mode
The default `MockImageEditorProvider` copies image bytes and simulates a model response so local development works without an API key.

## Architecture
- `app/` UI pages + API routes
- `components/` reusable UI components
- `lib/providers/` swappable image model providers
- `lib/storage/` swappable storage providers (local now, S3-compatible later)
- `lib/validation/` Zod request schemas
- `lib/moderation.ts` moderation checks
- `lib/db.ts` local JSON persistence for dev convenience

## Testing
Run:
```bash
npm test
```
Includes tests for validation, moderation, and basic UI flows.

## Example prompts
- "change the outfit to a navy business suit"
- "replace background with neon city at night"
- "make lighting cinematic and moody"
- "remove the red chair"
- "turn this into watercolor style"
