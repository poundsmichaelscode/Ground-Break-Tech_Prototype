"use client";
import { useEffect, useMemo, useState } from "react";
import { users } from "@/data/mock";
import { Plan, Role, UserProfile } from "@/types";

const ROLE_KEY = "groundbreak-session-role";
const PLAN_KEY = "groundbreak-session-plan";
export function useAuth() {
  const [role, setRole] = useState<Role>("contractor");
  const [plan, setPlan] = useState<Plan | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const savedRole = typeof window !== "undefined" ? window.localStorage.getItem(ROLE_KEY) as Role | null : null;
    const savedPlan = typeof window !== "undefined" ? window.localStorage.getItem(PLAN_KEY) as Plan | null : null;
    if (savedRole && users[savedRole]) setRole(savedRole);
    if (savedPlan === "premium" || savedPlan === "free") setPlan(savedPlan);
    setReady(true);
  }, []);
  const user = useMemo<UserProfile>(() => ({ ...users[role], plan: plan ?? users[role].plan }), [role, plan]);
  const login = (nextRole: Role) => { window.localStorage.setItem(ROLE_KEY, nextRole); setRole(nextRole); setPlan(null); window.localStorage.removeItem(PLAN_KEY); };
  const upgrade = () => { window.localStorage.setItem(PLAN_KEY, "premium"); setPlan("premium"); };
  const downgrade = () => { window.localStorage.setItem(PLAN_KEY, "free"); setPlan("free"); };
  const logout = () => { window.localStorage.removeItem(ROLE_KEY); window.location.href = "/login"; };
  return { user, role, ready, login, logout, upgrade, downgrade };
}
