import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const volumeData = [
  { name: "Mon", tickets: 18 },
  { name: "Tue", tickets: 24 },
  { name: "Wed", tickets: 21 },
  { name: "Thu", tickets: 28 },
  { name: "Fri", tickets: 22 },
  { name: "Sat", tickets: 14 },
  { name: "Sun", tickets: 16 },
];

export function TicketVolumeChart() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-panel">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-950">Weekly ticket volume</h2>
          <p className="mt-1 text-sm text-slate-500">Static chart for layout validation before live analytics wiring.</p>
        </div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={volumeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="ticketGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#357f65" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#357f65" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#e2e8f0" />
            <XAxis axisLine={false} dataKey="name" tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
            <Tooltip />
            <Area dataKey="tickets" fill="url(#ticketGradient)" stroke="#357f65" strokeWidth={3} type="monotone" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
