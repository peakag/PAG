"use client";
import { useAuth } from "../../components/AuthProvider";
import { Target, Users, DollarSign, ArrowUpRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import useSWR from "swr";
import { supabase } from "../../lib/supabase";

// Fetching functions
async function getCurrentMetrics(profileId: string) {
  const { data, error } = await supabase
    .from("gym_metrics")
    .select("*")
    .eq("profile_id", profileId)
    .order("date", { ascending: false })
    .limit(1)
    .single();
  if (error) throw error;
  return data;
}

async function getRecentSaves(profileId: string) {
  const { data, error } = await supabase
    .from("saved_members")
    .select("*")
    .eq("profile_id", profileId)
    .order("saved_date", { ascending: false })
    .limit(10);
  if (error) throw error;
  return data;
}

async function getMetricsTrend(profileId: string) {
  const since = new Date();
  since.setDate(since.getDate() - 30);
  const { data, error } = await supabase
    .from("gym_metrics")
    .select("date, retention_rate, members_saved, revenue_saved")
    .eq("profile_id", profileId)
    .gte("date", since.toISOString().slice(0, 10))
    .order("date", { ascending: true });
  if (error) throw error;
  return data;
}

export default function DashboardPage() {
  const { user } = useAuth();
  const [now, setNow] = useState(new Date());
  const [profileId, setProfileId] = useState<string | null>(null);

  // Get profileId from user (assume user.id is uuid)
  useEffect(() => {
    if (user?.id) setProfileId(user.id);
  }, [user]);

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // SWR hooks for data fetching
  const {
    data: metrics,
    error: metricsError,
    isLoading: metricsLoading,
    mutate: mutateMetrics
  } = useSWR(profileId ? ["currentMetrics", profileId] : null, () => getCurrentMetrics(profileId!), { revalidateOnFocus: true });

  const {
    data: recentSaves,
    error: savesError,
    isLoading: savesLoading,
    mutate: mutateSaves
  } = useSWR(profileId ? ["recentSaves", profileId] : null, () => getRecentSaves(profileId!), { revalidateOnFocus: true });

  const {
    data: trend,
    error: trendError,
    isLoading: trendLoading,
    mutate: mutateTrend
  } = useSWR(profileId ? ["metricsTrend", profileId] : null, () => getMetricsTrend(profileId!), { revalidateOnFocus: true });

  // Real-time subscriptions
  useEffect(() => {
    if (!profileId) return;
    const metricsSub = supabase
      .channel('realtime:metrics')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'gym_metrics', filter: `profile_id=eq.${profileId}` }, () => mutateMetrics())
      .subscribe();
    const savesSub = supabase
      .channel('realtime:saves')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'saved_members', filter: `profile_id=eq.${profileId}` }, () => mutateSaves())
      .subscribe();
    return () => {
      supabase.removeChannel(metricsSub);
      supabase.removeChannel(savesSub);
    };
  }, [profileId, mutateMetrics, mutateSaves]);

  // TODO: Replace with real gym name from user profile (fetch from profiles table)
  const gymName = "Peak Gym";

  // Loading skeletons
  const Skeleton = ({ className = "" }) => <div className={`animate-pulse bg-white/10 rounded ${className}`} />;

  return (
    <div className="flex flex-col gap-10">
      {/* Welcome Section */}
      <section className="mb-2">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">Welcome back, {gymName}</h2>
        <div className="text-white/60 text-sm md:text-base">
          {now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} &bull; {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </div>
      </section>

      {/* Key Metrics Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Retention Rate */}
        <MetricCard
          icon={<Target className="text-[#4169E1]" size={32} />}
          value={metricsLoading ? <Skeleton className="h-8 w-20" /> : metrics ? `${metrics.retention_rate}%` : "--"}
          label="Retention Rate"
          change={trendLoading ? <Skeleton className="h-4 w-16" /> : trend && trend.length > 1 ? `${((metrics?.retention_rate ?? 0) - (trend[0]?.retention_rate ?? 0)).toFixed(1)}% vs 30d ago` : "No trend data"}
          positive={metrics && trend && trend.length > 1 ? metrics.retention_rate >= trend[0].retention_rate : true}
        />
        {/* Members Saved */}
        <MetricCard
          icon={<Users className="text-[#4169E1]" size={32} />}
          value={metricsLoading ? <Skeleton className="h-8 w-20" /> : metrics ? metrics.members_saved : "--"}
          label="Members Saved This Month"
          change={trendLoading ? <Skeleton className="h-4 w-16" /> : trend && trend.length > 1 ? `${((metrics?.members_saved ?? 0) - (trend[0]?.members_saved ?? 0))} vs 30d ago` : "No trend data"}
          positive={metrics && trend && trend.length > 1 ? metrics.members_saved >= trend[0].members_saved : true}
        />
        {/* Revenue Protected */}
        <MetricCard
          icon={<DollarSign className="text-[#4169E1]" size={32} />}
          value={metricsLoading ? <Skeleton className="h-8 w-24" /> : metrics ? `$${metrics.revenue_saved?.toLocaleString()}` : "--"}
          label="Revenue Protected"
          change={trendLoading ? <Skeleton className="h-4 w-16" /> : trend && trend.length > 1 ? `$${((metrics?.revenue_saved ?? 0) - (trend[0]?.revenue_saved ?? 0)).toLocaleString()} vs 30d ago` : "No trend data"}
          positive={metrics && trend && trend.length > 1 ? metrics.revenue_saved >= trend[0].revenue_saved : true}
        />
      </section>
      {(metricsError || savesError || trendError) && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg p-4 mt-2">
          <div className="font-semibold mb-1">Error loading dashboard data</div>
          <div className="text-sm">{metricsError?.message || savesError?.message || trendError?.message}</div>
        </div>
      )}

      {/* Recent Activity Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">Recent Activity</h3>
        </div>
        <div className="overflow-x-auto rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
          <table className="min-w-full text-left text-white/90">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.08)]">
                <th className="px-6 py-3">Member Name</th>
                <th className="px-6 py-3">Risk Level</th>
                <th className="px-6 py-3">Action Taken</th>
                <th className="px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {savesLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                    <td className="px-6 py-4"><Skeleton className="h-4 w-16" /></td>
                    <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                    <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                  </tr>
                ))
              ) : recentSaves && recentSaves.length > 0 ? (
                recentSaves.map((row: any, i: number) => (
                  <tr
                    key={i}
                    className="hover:bg-[#4169E1]/10 cursor-pointer transition"
                    onClick={() => {/* TODO: Show member details modal */}}
                  >
                    <td className="px-6 py-4 font-medium">{row.member_name}</td>
                    <td className="px-6 py-4">{row.risk_level}</td>
                    <td className="px-6 py-4">{row.action_taken}</td>
                    <td className="px-6 py-4">{new Date(row.saved_date).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-white/60">No recent activity yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="flex flex-wrap gap-4 mt-6">
        <button className="bg-[#4169E1] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">View All Members</button>
        <button className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] text-white font-semibold px-6 py-3 rounded-lg shadow hover:border-[#4169E1] hover:bg-[#4169E1]/10 transition">Download Report</button>
        <button className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] text-white font-semibold px-6 py-3 rounded-lg shadow hover:border-[#4169E1] hover:bg-[#4169E1]/10 transition">Configure Automations</button>
      </section>
    </div>
  );
}

function MetricCard({ icon, value, label, change, positive }: { icon: React.ReactNode, value: React.ReactNode, label: string, change: React.ReactNode, positive?: boolean }) {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 flex flex-col items-start gap-2 shadow-sm transition hover:shadow-lg hover:border-[#4169E1]">
      <div className="mb-2">{icon}</div>
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="text-white/70 text-sm mb-1">{label}</div>
      <div className={positive ? "text-green-400 text-xs flex items-center gap-1" : "text-red-400 text-xs flex items-center gap-1"}>
        <ArrowUpRight size={14} /> {change}
      </div>
    </div>
  );
} 