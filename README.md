# SupportFlow

SupportFlow is a polished React and Vite portfolio application for support operations teams. It brings together a dashboard, ticket queue, internal task board, profile settings, local authentication, persistent browser storage, and light/dark theme controls in one deployable frontend.

## Project Overview

The app models the kind of workspace a growing customer support team needs when queue health, handoffs, and internal follow-up work all need to stay visible. It is intentionally frontend-only, which makes it easy to review, run locally, and deploy as a portfolio project without provisioning a backend.

## Problem Solved

Support teams often lose context when customer tickets, operational tasks, and workspace preferences live in separate tools. SupportFlow solves that portfolio problem by showing how a single React application can coordinate ticket CRUD, task CRUD, dashboard metrics, profile settings, authentication flow, theme preferences, and local persistence with a clean production structure.

## Features

- Local demo authentication with protected and public routes.
- Dashboard metrics for ticket volume, queue health, recent tickets, and upcoming tasks.
- Ticket management with create, edit, resolve, delete, search, filters, sorting, and localStorage persistence.
- Task management with create, edit, complete, delete, search, filters, sorting, and localStorage persistence.
- Profile settings with locally persisted user identity.
- Light and dark theme switching.
- Reset demo data control for restoring seeded tickets and tasks.
- Responsive layouts for mobile, tablet, and desktop.
- Vercel-ready SPA routing configuration.

## Tech Stack

- React 18
- Vite
- JavaScript
- Tailwind CSS
- React Router DOM
- React Hook Form
- Zod
- Recharts
- Lucide React
- localStorage for demo persistence

## Architecture Summary

```text
src/
  app/              Router and top-level providers
  components/       Shared layout, routing, form, and UI primitives
  context/          Auth, tickets, tasks, and theme state providers
  data/             Seed user, ticket, and task data
  features/         Dashboard, auth, tickets, tasks, and settings screens
  hooks/            Context accessors and page title helper
  lib/              Shared utility functions
  services/         localStorage persistence services
  styles/           Tailwind entry and global accessibility styles
```

Feature folders keep page-level workflows close to their selectors, option lists, and components. Shared providers expose only the actions needed by the UI, while services isolate browser storage concerns.

## Local Installation

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal, usually:

```text
http://localhost:5173
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Live Demo

https://supportflow-dashboard.vercel.app

Use any valid email address and a password with at least 6 characters to access the local demo.

Suggested demo values:

```text
Email: avery@supportflow.app
Password: support
```

## Screenshots

Add screenshots before publishing the repository:

- Dashboard view: `docs/screenshots/dashboard.png`
- Tickets view: `docs/screenshots/tickets.png`
- Tasks view: `docs/screenshots/tasks.png`
- Settings view: `docs/screenshots/settings.png`
- Mobile view: `docs/screenshots/mobile.png`


## Technical Decisions

- Browser-only persistence keeps the project simple to review and deploy while still demonstrating realistic CRUD workflows.
- React Router protected routes preserve direct navigation while keeping unauthenticated users on `/login`.
- Vercel rewrites send all routes to `index.html` so refresh works for `/login`, `/dashboard`, `/tickets`, `/tasks`, and `/settings`.
- Tailwind utility classes keep styling colocated with components and make responsive refinements explicit.
- Context providers separate domain actions from page components without introducing unnecessary state libraries.
- Seed data gives the app a complete portfolio walkthrough immediately after first login.

## Resetting Demo Data

Use the reset control in Settings to restore the seeded ticket and task data. To fully clear every local preference and session manually, run this in the browser console:

```js
localStorage.clear();
location.reload();
```

## Future Improvements

- Add automated component and route smoke tests.
- Connect authentication and CRUD flows to a backend API.
- Add optimistic UI states for remote persistence.
- Add role-based permissions for admin and agent workflows.
- Add import/export support for demo datasets.

## Author

Carlos Arboleda

Frontend developer focused on responsive, accessible, production-ready React applications.
