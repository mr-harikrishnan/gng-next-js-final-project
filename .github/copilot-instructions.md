# Copilot Instructions for AI Agents

## Project Overview
- This is a Next.js project using the App Router, bootstrapped with `create-next-app`.
- Main UI code is in `src/app/(root)/page.tsx` and related components in `src/component/`.
- Assets (images, fonts) are stored in `public/assets/` and `public/fonts/`.
- Tailwind CSS is used for styling (`tailwind.config.js`, `postcss.config.mjs`).

## Key Patterns & Conventions
- Page-level logic and layout are in `src/app/(root)/page.tsx`.
- Components are imported from `src/component/Btn.tsx` and similar files.
- Images are imported as modules (e.g., `import logo from "@/assets/vathiyar-ai-logo.png";`) and used as `<img src={logo.src} ... />`.
- Responsive and positional styling is handled via Tailwind utility classes, often with custom values (e.g., `left-25`, `xl:left-49`).
- For complex layouts, images and elements may be absolutely positioned within relatively positioned containers.
- Font optimization uses Next.js built-in features (`next/font`).

## Developer Workflows
- **Start dev server:** `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
- **Edit main page:** Modify `src/app/(root)/page.tsx`.
- **Add components:** Place reusable UI in `src/component/` and import as needed.
- **Styling:** Use Tailwind classes directly in JSX. Custom values may be defined in `tailwind.config.js`.
- **Assets:** Reference images/fonts from `public/assets/` or `public/fonts/` using import aliases (`@/assets/...`).

## Integration Points
- No backend/server code in this repo; all logic is client-side React/Next.js.
- External dependencies managed via `package.json`.
- Deployment is typically to Vercel; see Next.js docs for details.

## Examples
- To position an image absolutely within a grid cell:
  ```tsx
  <div className="relative">
    <div className="absolute left-25 top-10">
      <img src={purpleCicle.src} alt="" className="w-12" />
    </div>
  </div>
  ```
- To add a new button component:
  - Create `src/component/MyButton.tsx` and import it in `page.tsx`.

## References
- Main page: `src/app/(root)/page.tsx`
- Components: `src/component/`
- Assets: `public/assets/`, `public/fonts/`
- Tailwind config: `tailwind.config.js`
- Next.js config: `next.config.ts`

---
If any conventions or workflows are unclear, please ask for clarification or examples from the codebase.
