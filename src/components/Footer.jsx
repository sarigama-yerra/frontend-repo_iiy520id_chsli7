import React from 'react';
import { Github, Twitter, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="about" className="bg-black py-12 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold">Mario Kart Fan Experience</h3>
            <p className="mt-1 text-sm text-white/70">A tribute experience inspired by the Mushroom Kingdom.</p>
            <p className="mt-2 text-xs text-white/50">Not affiliated with or endorsed by Nintendo.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-white/80 hover:text-white">
              <Github size={16} /> Source
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-white/80 hover:text-white">
              <Twitter size={16} /> Updates
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-2 text-sm text-amber-200 hover:bg-amber-300/20">
              <Star size={16} /> Star Project
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-white/40">© {new Date().getFullYear()} Mario Kart Fan Site</div>
      </div>
    </footer>
  );
}
