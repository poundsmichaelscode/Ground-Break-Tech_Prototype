# Groundbreak Tech — Enterprise MVP v4

Premium construction management SaaS for contractors, homeowners, and administrators.

## Stack

- Next.js 15.1.9 App Router
- React 19.0.1
- TypeScript
- Tailwind CSS
- shadcn-style UI primitives
- Framer Motion-ready architecture
- Responsive desktop, tablet, and mobile layouts
- Mock API routes for realistic demo workflows

## New Enterprise Modules

- Role-based dashboards for Administrator, Contractor, and Homeowner
- Task management with Kanban, table, and calendar views
- Schedule & calendar with construction milestones, inspections, deliveries, crew planning, and reminders
- Daily Site Logs with weather, crew, equipment, materials, safety, photos, approval state, and export actions
- RFI management with assignments, priorities, attachments, and response history
- AI Assistant chat interface with suggested prompts and file upload placeholder
- Team management with roles, project assignments, status, contact info, and permissions simulation
- Enhanced Blueprint Viewer with drawing thumbnails, upload simulation, zoom, pan, measurements, grid, markups, comparison, metadata, layers, version history, and offline status
- Enhanced Projects page with realistic construction photography, team avatars, budgets, milestones, and quick actions
- Premium subscription logic where upgrade immediately unlocks premium modules in local storage

## Run locally

```bash
nvm use 20
corepack enable
corepack prepare pnpm@10.18.3 --activate
pnpm install --config.dangerously-allow-all-builds=true
pnpm dev
```

Open `http://localhost:3000`.

## Important routes

- `/dashboard`
- `/projects`
- `/tasks`
- `/schedule`
- `/daily-logs`
- `/rfis`
- `/ai-assistant`
- `/team`
- `/blueprint-viewer`
- `/proposals`
- `/contracts`
- `/invoices`
- `/billing`
- `/upgrade`

## Role testing

Go to `/login` and choose:

- Administrator
- Contractor
- Homeowner

The sidebar, dashboard, and protected pages adapt by role.

## Deployment

The project uses patched Next.js `15.1.9` and React `19.0.1` for Vercel compatibility.
