# AIWorkspace

Property management dashboard built with React + TypeScript + Vite. The first version uses a single JSON bundle to simulate backend responses while keeping types and a data-service layer ready for real APIs.

## Quickstart
- Install deps: `npm install`
- Run dev server: `npm run dev` (default http://localhost:5173)
- Type-check: `npm run lint`
- Build: `npm run build`

## Project layout
- `src/data/mockData.ts` – all mock data shaped like backend responses.
- `src/services/dataService.ts` – fetch helpers to swap with real API calls later.
- `src/types.ts` – shared contracts for dashboard, inbox, properties, and messages.
- `src/pages/Dashboard.tsx` – dashboard UI (stats, properties, inbox highlights, activity).
- `src/pages/Inbox.tsx` – inbox UI with mail list + AI summary thread view + composer.
- `src/components/Sidebar.tsx` – navigation shell matching the design.
- `src/index.css` – tokens/theme and layout styling.

## Backend handoff
Replace the methods in `src/services/dataService.ts` with real requests and keep the return shapes from `src/types.ts`:
- `fetchDashboard(): Promise<DashboardData>` – stats, properties, inbox highlights, activity feed.
- `fetchInbox(): Promise<InboxData>` – inbox list + selected thread content.
- `fetchAppData(): Promise<AppData>` – combined payload if you prefer a single round trip.

Data objects are currently hydrated from `mockData.ts`, so UI state is ready for backend wiring without UI changes.
