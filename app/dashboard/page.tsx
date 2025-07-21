import { ArrowUpRight, Users, TrendingUp, Settings } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      {/* Example Stat Card */}
      <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 flex flex-col gap-2 shadow-sm transition hover:shadow-lg hover:border-[#4169E1]">
        <div className="flex items-center gap-3">
          <Users className="text-[#4169E1]" size={28} />
          <span className="text-white text-lg font-semibold">Members</span>
        </div>
        <div className="text-3xl font-bold text-white mt-2">1,234</div>
        <div className="text-green-400 text-sm flex items-center gap-1">
          <ArrowUpRight size={16} /> 4.2% this month
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 flex flex-col gap-2 shadow-sm transition hover:shadow-lg hover:border-[#4169E1]">
        <div className="flex items-center gap-3">
          <TrendingUp className="text-[#4169E1]" size={28} />
          <span className="text-white text-lg font-semibold">Analytics</span>
        </div>
        <div className="text-3xl font-bold text-white mt-2">98%</div>
        <div className="text-green-400 text-sm flex items-center gap-1">
          <ArrowUpRight size={16} /> 1.8% this week
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 flex flex-col gap-2 shadow-sm transition hover:shadow-lg hover:border-[#4169E1]">
        <div className="flex items-center gap-3">
          <Settings className="text-[#4169E1]" size={28} />
          <span className="text-white text-lg font-semibold">Settings</span>
        </div>
        <div className="text-3xl font-bold text-white mt-2">Custom</div>
        <div className="text-white/60 text-sm">Manage your preferences</div>
      </div>
      <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 flex flex-col gap-2 shadow-sm transition hover:shadow-lg hover:border-[#4169E1]">
        <div className="flex items-center gap-3">
          <Users className="text-[#4169E1]" size={28} />
          <span className="text-white text-lg font-semibold">Active Users</span>
        </div>
        <div className="text-3xl font-bold text-white mt-2">312</div>
        <div className="text-green-400 text-sm flex items-center gap-1">
          <ArrowUpRight size={16} /> 2.1% today
        </div>
      </div>
    </div>
  );
} 