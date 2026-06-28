"use client";
import { useEffect, useMemo, useState } from "react";
import { users } from "@/data/mock";
import { Role, UserProfile } from "@/types";

const KEY = "groundbreak-session-role";

export function useAuth() {
  const [role, setRole] = useState<Role>("contractor");
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(KEY) as Role | null : null;
    if (saved && users[saved]) setRole(saved);
    setReady(true);
  }, []);
  const user = useMemo<UserProfile>(() => users[role], [role]);
  const login = (nextRole: Role) => { window.localStorage.setItem(KEY, nextRole); setRole(nextRole); };
  const logout = () => { window.localStorage.removeItem(KEY); window.location.href = "/login"; };
  return { user, role, ready, login, logout };
}
