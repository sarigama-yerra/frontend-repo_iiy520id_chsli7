import React from 'react';
import { Gamepad2, Trophy, ShoppingCart, Info, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-red-500 text-white shadow shadow-red-500/40">
            <Gamepad2 size={20} />
          </div>
          <span className="font-extrabold tracking-tight">Mario Kart</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#play" className="hover:text-white transition inline-flex items-center gap-2"><Gamepad2 size={16} /> Play</a>
          <a href="#cups" className="hover:text-white transition inline-flex items-center gap-2"><Trophy size={16} /> Cups</a>
          <a href="#karts" className="hover:text-white transition inline-flex items-center gap-2"><ShoppingCart size={16} /> Karts</a>
          <a href="#about" className="hover:text-white transition inline-flex items-center gap-2"><Info size={16} /> About</a>
        </nav>

        <button className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white/90">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
