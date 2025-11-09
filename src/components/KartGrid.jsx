import React from 'react';
import { Rocket, Shield, Zap } from 'lucide-react';

const karts = [
  {
    name: 'Pipe Kart',
    desc: 'Balanced starter with smooth handling.',
    color: 'from-emerald-400 to-teal-500',
    stats: [
      { label: 'Speed', value: 70 },
      { label: 'Handling', value: 80 },
      { label: 'Boost', value: 65 },
    ],
  },
  {
    name: 'Bullet Blazer',
    desc: 'High speed, unstable in tight turns.',
    color: 'from-rose-500 to-red-600',
    stats: [
      { label: 'Speed', value: 92 },
      { label: 'Handling', value: 60 },
      { label: 'Boost', value: 85 },
    ],
  },
  {
    name: 'Star Cruiser',
    desc: 'Top-tier boost with stellar drift.',
    color: 'from-indigo-500 to-violet-600',
    stats: [
      { label: 'Speed', value: 78 },
      { label: 'Handling', value: 74 },
      { label: 'Boost', value: 95 },
    ],
  },
];

function StatBar({ label, value }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-white/70">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-white/80" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default function KartGrid() {
  return (
    <section id="karts" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Featured Karts</h2>
            <p className="mt-2 text-white/70">Collect, upgrade, and customize your ride.</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70"><Rocket size={14}/> Speed</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70"><Shield size={14}/> Handling</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70"><Zap size={14}/> Boost</span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {karts.map((k) => (
            <div key={k.name} className="group rounded-2xl border border-white/10 bg-gradient-to-br p-6 shadow-xl shadow-black/40 transition hover:shadow-2xl hover:shadow-black/60 " style={{ backgroundImage: undefined }}>
              <div className={`relative h-36 w-full overflow-hidden rounded-xl bg-gradient-to-br ${k.color}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
              </div>
              <h3 className="mt-4 text-xl font-bold">{k.name}</h3>
              <p className="mt-1 text-sm text-white/70">{k.desc}</p>
              <div className="mt-4 space-y-2">
                {k.stats.map((s) => (
                  <StatBar key={s.label} label={s.label} value={s.value} />
                ))}
              </div>
              <button className="mt-5 w-full rounded-xl bg-white/10 py-2 text-sm font-semibold text-white transition hover:bg-white/20">Select</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
