import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
          <p className="text-xs font-medium tracking-wide text-white/80">New Seasonal Cup: Rainbow Rush</p>
        </div>
        <h1 className="mt-6 font-black tracking-tight text-4xl sm:text-6xl md:text-7xl">
          Mario Kart Arcade Online
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Drift, boost, and blast your way to first place. Challenge friends, unlock iconic karts, and conquer cups
          inspired by the Mushroom Kingdom.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#play"
            className="rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Play Now
          </a>
          <a
            href="#karts"
            className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            View Karts
          </a>
        </div>
      </div>
    </section>
  );
}
