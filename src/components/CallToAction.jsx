import React from 'react';

export default function CallToAction() {
  return (
    <section id="play" className="relative bg-gradient-to-b from-black via-zinc-950 to-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Ready, Set, Race!</h2>
            <p className="mt-3 text-white/70">
              Jump straight into time trials or match up with friends in multiplayer. Earn coins as you race to
              unlock new karts, trails, and character skins.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Quick Race
              </a>
              <a
                href="#cups"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                View Cups
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div className="rounded-xl bg-black/40 p-4">
                <p className="text-3xl font-extrabold">120+</p>
                <p className="mt-1 text-white/70">Tracks</p>
              </div>
              <div className="rounded-xl bg-black/40 p-4">
                <p className="text-3xl font-extrabold">25</p>
                <p className="mt-1 text-white/70">Karts</p>
              </div>
              <div className="rounded-xl bg-black/40 p-4">
                <p className="text-3xl font-extrabold">4</p>
                <p className="mt-1 text-white/70">Modes</p>
              </div>
            </div>
            <div className="mt-4 rounded-xl bg-gradient-to-br from-red-500/30 to-rose-500/30 p-4 text-center text-white/80">
              New: Rainbow Rush Cup now live this season!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
