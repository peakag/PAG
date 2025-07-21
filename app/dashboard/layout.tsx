"use client"
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { LayoutDashboard, Users, TrendingUp, Settings, Menu, LogOut } from "lucide-react";
import { useAuth } from "../../components/AuthProvider";

const navItems = [
  { name: "Overview", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Members", icon: Users, href: "/dashboard/members" },
  { name: "Analytics", icon: TrendingUp, href: "/dashboard/analytics" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, logout, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Protect route
  if (!loading && !user) {
    if (typeof window !== "undefined") router.push("/login");
    return null;
  }

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  const pageTitle = navItems.find(item => pathname?.startsWith(item.href))?.name || "Dashboard";

  const Sidebar = (
    <aside
      className="flex flex-col h-full w-64 bg-[rgba(255,255,255,0.02)] border-r border-[rgba(255,255,255,0.08)] fixed md:static left-0 top-0 z-40 transition-transform duration-300"
      style={{ minHeight: '100vh' }}
    >
      <div className="flex items-center gap-3 px-6 py-6 border-b border-[rgba(255,255,255,0.08)]">
        <Image src="/pag-logo.png" alt="Peak Automation Group" width={36} height={36} />
        {/* <span className="text-white text-lg font-semibold tracking-wide">Peak Automation Group</span> */}
      </div>
      <nav className="flex-1 flex flex-col gap-1 mt-4">
        {navItems.map(item => {
          const active = pathname === item.href;
          return (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 border-l-4 ${
                active
                  ? 'text-[#4169E1] border-[#4169E1] bg-white/5'
                  : 'text-white/80 border-transparent hover:bg-white/5 hover:text-white'
              }`}
              style={{ marginRight: '8px' }}
              onClick={() => setMobileOpen(false)}
            >
              <item.icon size={20} />
              {item.name}
            </a>
          );
        })}
      </nav>
      <div className="mt-auto px-6 py-6 border-t border-[rgba(255,255,255,0.08)] flex items-center gap-3">
        <div className="flex-1">
          <div className="text-white text-sm font-semibold">{user?.email}</div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-white/80 hover:text-red-400 transition-colors text-sm font-medium px-3 py-2 rounded-lg"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar for desktop */}
      <div className="hidden md:block">{Sidebar}</div>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white/5 p-2 rounded-lg border border-[rgba(255,255,255,0.08)] text-white hover:bg-white/10 transition"
        onClick={() => setMobileOpen(true)}
        aria-label="Open navigation"
      >
        <Menu size={24} />
      </button>
      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-64 h-full bg-[rgba(255,255,255,0.02)] border-r border-[rgba(255,255,255,0.08)] shadow-xl animate-slideInLeft relative">
            {Sidebar}
            <button
              className="absolute top-4 right-4 text-white/60 hover:text-white"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation"
            >
              ✕
            </button>
          </div>
          <div
            className="flex-1 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      )}
      {/* Main Content */}
      <main className="flex-1 min-h-screen ml-0 md:ml-64 p-6 md:p-10 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-2">
          {/* <h1 className="text-white text-2xl font-bold tracking-tight">{pageTitle}</h1> */}
          <div className="text-white/60 text-sm md:text-base">{user?.email}</div>
        </div>
        <div className="bg-transparent w-full h-full">
          {children}
        </div>
      </main>
    </div>
  );
} 