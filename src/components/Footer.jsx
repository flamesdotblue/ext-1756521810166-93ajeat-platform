import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-sm bg-red-500/80 ring-1 ring-red-300/40" />
          <span className="text-sm tracking-widest text-white/80">GRIDFALL</span>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} Blackline Tactics. All rights reserved.</p>
        <div className="flex gap-4 text-xs">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
