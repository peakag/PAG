import { useAuth } from "../../components/AuthProvider";
import { Target, Users, DollarSign, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const MOCK_METRICS = {
  retentionRate: 92.4,
  retentionChange: 2.1, // +2.1% vs last month
  membersSaved: 37,
  membersSavedChange: 4.5, // +4.5% vs last month
  revenueProtected: 12400,
  revenueChange: 3.2, // +3.2% vs last month
};

const MOCK_ACTIVITY = [
  { name: "Jane Smith", risk: "High", action: "Automated Outreach", date: "2024-07-21" },
  { name: "John Doe", risk: "Medium", action: "Manual Call", date: "2024-07-20" },
  { name: "Emily Johnson", risk: "Low", action: "Email Reminder", date: "2024-07-19" },
  { name: "Michael Brown", risk: "High", action: "Automated Outreach", date: "2024-07-18" },
  { name: "Sarah Lee", risk: "Medium", action: "Manual Call", date: "2024-07-17" },
  { name: "Chris Green", risk: "Low", action: "Email Reminder", date: "2024-07-16" },
  { name: "Jessica White", risk: "High", action: "Automated Outreach", date: "2024-07-15" },
  { name: "David Black", risk: "Medium", action: "Manual Call", date: "2024-07-14" },
  { name: "Ashley Blue", risk: "Low", action: "Email Reminder", date: "2024-07-13" },
  { name: "Brian Red", risk: "High", action: "Automated Outreach", date: "2024-07-12" },
  // TODO: Connect to Supabase for real data
];

export default function DashboardPage() {
  const { user } = useAuth();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // TODO: Replace with real gym name from user profile
  const gymName = "Peak Gym";

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
          value={`${MOCK_METRICS.retentionRate}%`}
          label="Retention Rate"
          change={`+${MOCK_METRICS.retentionChange}% vs last month`}
          positive
        />
        {/* Members Saved */}
        <MetricCard
          icon={<Users className="text-[#4169E1]" size={32} />}
          value={MOCK_METRICS.membersSaved}
          label="Members Saved This Month"
          change={`+${MOCK_METRICS.membersSavedChange}% vs last month`}
          positive
        />
        {/* Revenue Protected */}
        <MetricCard
          icon={<DollarSign className="text-[#4169E1]" size={32} />}
          value={`$${MOCK_METRICS.revenueProtected.toLocaleString()}`}
          label="Revenue Protected"
          change={`+${MOCK_METRICS.revenueChange}% vs last month`}
          positive
        />
      </section>

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
              {MOCK_ACTIVITY.map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-[#4169E1]/10 cursor-pointer transition"
                  onClick={() => {/* TODO: Show member details modal */}}
                >
                  <td className="px-6 py-4 font-medium">{row.name}</td>
                  <td className="px-6 py-4">{row.risk}</td>
                  <td className="px-6 py-4">{row.action}</td>
                  <td className="px-6 py-4">{row.date}</td>
                </tr>
              ))}
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

function MetricCard({ icon, value, label, change, positive }: { icon: React.ReactNode, value: React.ReactNode, label: string, change: string, positive?: boolean }) {
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