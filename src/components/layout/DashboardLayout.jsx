import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

export function DashboardLayout() {
  return (
    <div className="min-h-screen px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-7xl gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
        <div className="lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)]">
          <Sidebar />
        </div>

        <div className="flex min-h-full flex-col gap-4">
          <Topbar />
          <main className="flex-1 rounded-[28px] border border-[#D0D7DE] bg-white p-5 shadow-panel dark:border-[#30363D] dark:bg-[#161B22] sm:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
