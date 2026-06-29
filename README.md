# Groundbreak Tech — Production-Ready MVP Prototype

Groundbreak Tech is a premium construction management SaaS MVP built with Next.js App Router, React, TypeScript, Tailwind CSS, shadcn-style UI primitives, role-aware navigation, mock APIs, and realistic construction demo data.

## What is included

- Role-based authentication mock for Administrator, Contractor, and Homeowner
- Protected navigation and route access rules
- Free and Premium plan logic with locked feature prompts
- Redesigned Billing page with plan comparison, usage, payment history, saved card, invoices, and mock Stripe-ready actions
- Polished Profile and Settings pages
- Proposal management module with create, edit, duplicate, delete, preview, send, PDF mock, and convert-to-contract mock actions
- Contract management module with milestones, payment schedule, deliverables, attachments, and digital signature placeholder
- Invoice management module with line items, payment status, PDF mock, duplicate, send, mark paid, and delete actions
- Improved role-aware dashboards
- Project, budget, approvals, messages, notifications, materials, analytics, offline, blueprint viewer, and admin pages
- Mock API routes under `/api/mock/*`
- Responsive layouts and accessible controls

## Install

Use Node.js 20+.

```bash
rm -rf node_modules package-lock.json .next
npm cache clean --force
npm install --legacy-peer-deps --no-audit --no-fund --fetch-timeout=120000
npm run dev
```

If your network times out with npm, use pnpm:

```bash
npm install -g pnpm
rm -rf node_modules package-lock.json pnpm-lock.yaml .next
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Demo login

Go to `/login` and select one role:

- Administrator: full system access
- Contractor: projects, blueprints, approvals, proposals, contracts, invoices, budgets, messages
- Homeowner: project, budget, approvals, invoices, proposals, contracts, messages, profile, settings

The auth flow is intentionally localStorage-based for MVP demo use. It is structured so a real auth provider can replace it later.

## Recommended production next steps

- Replace localStorage auth with NextAuth/Auth.js, Clerk, or custom JWT sessions
- Add PostgreSQL schema with Prisma or Drizzle
- Replace mock API routes with real CRUD endpoints
- Integrate Stripe checkout, billing portal, invoices, and webhooks
- Add file upload storage for blueprints and attachments
- Add real PDF generation using server-side rendering
- Add audit log persistence

## Latest public-page polish update

This version separates the marketing pages so each page has a distinct purpose and layout:

- `/features` now focuses on product capabilities by user workflow.
- `/pricing` now focuses on Free vs Premium plan decisions and upgrade limits.
- `/about` now tells the company/product story and construction problem being solved.
- `/contact` now includes a working mock demo-request form and contact options.

Gradient styling has been removed from the public marketing experience and replaced with plain premium colors, clean borders, whitespace, solid cards, and consistent typography.
