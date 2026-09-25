import type { Stat } from "@/content/impact";

/** Hairline-divided row of headline figures. */
export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`flex flex-col bg-white py-10 sm:py-12 ${i % 2 === 0 ? "pr-5" : "pl-5 sm:pl-10"} ${
            i === 2 ? "lg:pl-10" : ""
          }`}
        >
          <dt className="text-sm font-semibold text-navy-900">{stat.label}</dt>
          <dd className="order-first font-serif text-4xl font-medium tracking-tight text-navy-900 sm:text-5xl xl:text-6xl">
            {stat.value}
          </dd>
          {stat.note && <dd className="mt-1 text-sm text-muted">{stat.note}</dd>}
        </div>
      ))}
    </dl>
  );
}
