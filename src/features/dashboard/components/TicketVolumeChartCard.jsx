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
    <div className="rounded-xl border border-[#D0D7DE] bg-white px-3 py-2 shadow-lg dark:border-[#30363D] dark:bg-[#161B22]">
      <p className="text-sm font-medium text-slate-900 dark:text-[#F0F6FC]">{point.fullDateLabel}</p>
      <p className="mt-1 text-sm text-slate-600 dark:text-[#8B949E]">{payload[0].value} tickets created</p>
    </div>
  );
}

export function TicketVolumeChartCard({ data }) {
  const totalVolume = data.reduce((sum, entry) => sum + entry.tickets, 0);
  const busiestDay = data.reduce((top, entry) => (entry.tickets > top.tickets ? entry : top), data[0] || { tickets: 0 });

  return (
    <section className="rounded-2xl border border-[#D0D7DE] bg-white p-5 shadow-panel transition duration-200 hover:shadow-[0_16px_28px_rgba(15,23,42,0.08)] dark:border-[#30363D] dark:bg-[#161B22] dark:hover:shadow-[0_18px_32px_rgba(2,6,23,0.35)]">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-950 dark:text-[#F0F6FC]">Weekly ticket volume</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-[#8B949E]">Seven-day trend generated directly from ticket creation timestamps.</p>
        </div>
        <div className="text-right text-sm text-slate-500 dark:text-[#8B949E]">
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
                  <stop offset="5%" stopColor="#2F81F7" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#2F81F7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#D0D7DE" />
              <XAxis axisLine={false} dataKey="dayLabel" tickLine={false} tick={{ fill: "#57606A", fontSize: 12 }} />
              <YAxis allowDecimals={false} axisLine={false} tickLine={false} tick={{ fill: "#57606A", fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#30363D", strokeDasharray: "4 4" }} />
              <Area dataKey="tickets" fill="url(#ticketGradient)" stroke="#2F81F7" strokeWidth={3} type="monotone" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#D0D7DE] bg-slate-50 px-4 py-14 text-center text-sm text-slate-500 dark:border-[#30363D] dark:bg-[#0B0E14] dark:text-[#8B949E]">
          Weekly volume will appear once ticket creation dates are available.
        </div>
      )}
    </section>
  );
}
