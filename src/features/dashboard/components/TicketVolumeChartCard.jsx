import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) {
    return null;
  }

  const point = payload[0].payload;

  return (
    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg dark:border-slate-700 dark:bg-slate-950">
      <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{point.fullDateLabel}</p>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{payload[0].value} tickets created</p>
    </div>
  );
}

export function TicketVolumeChartCard({ data }) {
  const totalVolume = data.reduce((sum, entry) => sum + entry.tickets, 0);
  const busiestDay = data.reduce((top, entry) => (entry.tickets > top.tickets ? entry : top), data[0] || { tickets: 0 });

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-panel dark:border-slate-800 dark:bg-slate-950">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-950 dark:text-slate-50">Weekly ticket volume</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Seven-day trend generated directly from ticket creation timestamps.</p>
        </div>
        <div className="text-right text-sm text-slate-500 dark:text-slate-400">
          <p>{totalVolume} tickets in range</p>
          <p>{busiestDay.tickets ? `${busiestDay.dayLabel} busiest day` : "No volume yet"}</p>
        </div>
      </div>

      {data.length ? (
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="ticketGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#357f65" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#357f65" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#e2e8f0" />
              <XAxis axisLine={false} dataKey="dayLabel" tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
              <YAxis allowDecimals={false} axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#cbd5e1", strokeDasharray: "4 4" }} />
              <Area dataKey="tickets" fill="url(#ticketGradient)" stroke="#357f65" strokeWidth={3} type="monotone" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-14 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          Weekly volume will appear once ticket creation dates are available.
        </div>
      )}
    </section>
  );
}
