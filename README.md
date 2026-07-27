# Fluent Voices

A Next.js and TypeScript prototype for Fluent Voices, an AI-Ed library that preserves meaningful work created by AI-Ed graduates.

## Project structure

- `app/page.tsx` — homepage
- `app/verify-license/page.tsx` — Creative License verification
- `app/components/` — reusable interface components
- `app/globals.css` — shared visual design
- `public/images/` — future image assets

## Run locally

You need Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Prototype license

Use:

```text
CL-2026-01472
```

## GitHub Pages

A workflow is included at `.github/workflows/deploy.yml`.

After uploading the project:

1. Open the repository's **Settings**.
2. Choose **Pages**.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Push a change to the `main` branch or run the workflow manually from **Actions**.

The project uses Next.js static export, so the finished site is generated in the `out` folder during deployment.
