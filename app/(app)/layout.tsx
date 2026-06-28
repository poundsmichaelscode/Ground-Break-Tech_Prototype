import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { RouteGuard } from "@/components/layout/route-guard";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-background"><Sidebar /><Topbar /><main className="px-4 py-8 lg:ml-72 lg:px-8"><RouteGuard>{children}</RouteGuard></main></div>;
}
