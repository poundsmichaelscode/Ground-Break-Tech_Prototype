import { Role, Plan } from "@/types";

export const roleLabels: Record<Role, string> = { admin: "Administrator", contractor: "Contractor", buyer: "Homeowner" };

export const routePermissions: Record<string, Role[]> = {
  "/admin": ["admin"],
  "/analytics": ["admin", "contractor"],
  "/billing": ["admin", "contractor", "buyer"],
  "/projects": ["admin", "contractor", "buyer"],
  "/blueprint-viewer": ["admin", "contractor"],
  "/approvals": ["admin", "contractor", "buyer"],
  "/budget": ["admin", "contractor", "buyer"],
  "/messages": ["admin", "contractor", "buyer"],
  "/tasks": ["admin", "contractor"],
  "/schedule": ["admin", "contractor"],
  "/daily-logs": ["admin", "contractor", "buyer"],
  "/rfis": ["admin", "contractor"],
  "/ai-assistant": ["admin", "contractor", "buyer"],
  "/team": ["admin", "contractor"],
  "/proposals": ["admin", "contractor", "buyer"],
  "/contracts": ["admin", "contractor", "buyer"],
  "/invoices": ["admin", "contractor", "buyer"],
  "/materials": ["admin", "contractor"],
  "/offline": ["admin", "contractor"],
  "/notifications": ["admin", "contractor", "buyer"],
  "/profile": ["admin", "contractor", "buyer"],
  "/settings": ["admin", "contractor", "buyer"]
};

export const planLimits: Record<Plan, string[]> = {
  free: ["One active project", "Two blueprint uploads", "Basic budget view", "Messages", "Homeowner approvals"],
  premium: ["Unlimited projects", "Unlimited uploads", "Offline sync", "Proposal management", "Invoicing", "Analytics", "Premium reporting", "Team collaboration"]
};

export function canAccess(role: Role, href: string) {
  const entry = Object.entries(routePermissions).find(([path]) => href.startsWith(path));
  return entry ? entry[1].includes(role) : true;
}

export function isPremiumLocked(plan: Plan, feature: string) {
  const premiumFeatures = ["offline", "proposal", "invoice", "analytics", "reports", "unlimited", "team", "ai", "rfi", "daily", "schedule", "blueprint"];
  return plan === "free" && premiumFeatures.some((item) => feature.toLowerCase().includes(item));
}
