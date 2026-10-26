# Repository Guidelines

This Astro-based résumé site blends Astro pages, Solid components, Tailwind styling, and Netlify functions.

## Project Structure & Module Organization

Source code lives in `src/`: page entry points under `src/pages`, shared shells in `src/layouts`, and view fragments in `src/components`. Global styles sit in `src/styles/global.css`, while static assets belong in `public/`. Serverless automation (e.g., scheduled deploy triggers) resides in `netlify/functions/`. Avoid committing the `.astro/` cache and prefer reusing existing components before adding new directories.

## Build, Test, and Development Commands

Use pnpm for all workflows. Run `pnpm install` after cloning to create the exact workspace. `pnpm dev` (alias `pnpm start`) launches the local Astro dev server with live reload. `pnpm build` produces the optimized static output consumed by Netlify, and `pnpm preview` serves that build for smoke testing. Execute `pnpm format` before opening a pull request to apply Prettier + Tailwind sorting, and rely on `pnpm astro check` for type and markup validation when you need ad-hoc checks.

## Coding Style & Naming Conventions

Astro and Solid components should be named in PascalCase (e.g., `ThemeToggler.tsx`, `Sidebar.astro`), while utility modules use lowerCamelCase filenames. Favor Tailwind utility classes for styling; when custom CSS is required, add it to `global.css` using 2-space indentation. Prettier (including the Astro and Tailwind plugins) is the single source of formatting truth, so do not hand-tweak spacing or class order.

## Testing Guidelines

There is no dedicated test runner yet. Instead, trust Astro’s compiler and TypeScript to guard regressions. Always run `pnpm astro check` (automatically enforced via the Husky `pre-push` hook) and manually verify the homepage and 404 page at `http://localhost:4321` before shipping. Document any manual test steps in your pull request.

## Commit & Pull Request Guidelines

Follow the existing Conventional Commit style (`feat:`, `fix:`, `chore:`) seen in the Git history, keeping subjects under 72 characters. Each pull request should include: a concise summary of the change, screenshots or GIFs for visual updates, and a checklist of verification steps (`pnpm build`, browser smoke test, etc.). Link relevant issues when available and call out configuration changes impacting Netlify or environment variables.
