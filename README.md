# Portfolio Website (Frontend)

This is the frontend for my personal portfolio: a place where I showcase client work, experiments, and the stack I feel most productive with. It is built to load fast, feel smooth on every breakpoint, and pull live content from an API so I can grow the site without shipping new builds each time.

## Highlights

- Fully responsive React app running on Vite, optimized for instant dev feedback and lean production bundles.
- Tailwind-powered design system with light/dark themes, motion flourishes via Framer Motion, and polished micro-interactions (Scroll-to-top, animated nav, loading states).
- Content-driven architecture: custom hooks (`usePersonalInfo`, `useProjects`, `useSkills`) hydrate the UI from an API, keeping components purely presentational.
- Accessible contact form that posts directly to `/api/contact/`, with inline validation states and backend-friendly payloads.
- Ready for Vercel (or any static host) thanks to environment-based API URLs and zero server-side assumptions on the frontend.

## Tech Stack

- **Framework**: React 19 + React Router 7
- **Tooling**: Vite 6, ESLint 9
- **Styling**: Tailwind CSS (class-based dark mode), custom color tokens
- **Animation & Icons**: Framer Motion, Heroicons, React Icons
- **Data Layer**: Axios + custom hooks for projects, skills, personal info

## Project Structure

```text
├─ src
│  ├─ App.jsx              # Router definition
│  ├─ components/          # Navbar, Layout, cards, ScrollToTop, etc.
│  ├─ hooks/               # API-facing hooks (personal info, projects, skills)
│  ├─ pages/               # Home, Projects, Contact views
│  ├─ assets/              # Static media
│  └─ index.css / main.jsx # App bootstrap + Tailwind entry
├─ public/                 # Fallback assets served by Vite
├─ tailwind.config.js      # Theme tokens + dark mode toggle
└─ vercel.json             # Production routing hints
```

## Environment Variables

The frontend expects a backend that exposes `/api/personal-info/`, `/api/projects/`, `/api/skills/`, and `/api/contact/` endpoints. Point the client to it with:

```bash
VITE_API_URL=https://your-backend.example.com
```

If the variable is omitted, the app falls back to `http://localhost:8000`, which is handy when running the Django/FastAPI backend locally.

## Getting Started

1. **Install dependencies**

	```bash
	npm install
	```

2. **Run in development** (auto-opens on `http://localhost:5173`):

	```bash
	npm run dev
	```

3. **Create a production build**:

	```bash
	npm run build
	npm run preview   # optional smoke test of the dist bundle
	```

## Available Scripts

- `npm run dev` – start Vite dev server with hot module replacement.
- `npm run build` – generate optimized static assets under `dist/`.
- `npm run preview` – serve the built site locally for a final QA pass.
- `npm run lint` – run ESLint with the project rules (React + hooks plugins).

## Deployment Notes

- The app is static, so any CDN or static host works (Vercel config is already included for zero-config deploys).
- Ensure `VITE_API_URL` is set in the hosting provider dashboard so the frontend can talk to the backend API.
- Use the same origin for assets like profile pictures or resume PDFs; helper utilities already prepend the base URL when rendering.

## Personalizing Content

- Update data in the backing API to change skills, projects, social links, or contact routing—no rebuilds required.
- Tweak styling tokens in `tailwind.config.js` or global CSS if you want to refresh the palette.
- Components were intentionally kept small and readable, so swapping cards, adding sections, or integrating analytics is straightforward.

## Contact

Have questions about the implementation or want to collaborate? Reach me via the contact form on the site or message me on LinkedIn/GitHub (links are wired through the footer once personal info is returned by the API).
