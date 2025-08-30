import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* 3D Interactive Grid Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that do NOT block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-sm bg-red-500/80 ring-1 ring-red-300/40" />
            <span className="text-lg tracking-widest text-white/90">GRIDFALL</span>
          </div>
          <div className="hidden gap-6 md:flex">
            <a href="#features" className="text-sm text-white/80 hover:text-white">Features</a>
            <a href="#trailer" className="text-sm text-white/80 hover:text-white">Trailer</a>
            <a href="#" className="text-sm text-white/80 hover:text-white">Press Kit</a>
          </div>
          <a
            href="#trailer"
            className="rounded-md bg-red-500/90 px-4 py-2 text-sm font-medium text-white shadow-sm ring-1 ring-red-300/40 transition hover:bg-red-500"
          >
            Watch Trailer
          </a>
        </nav>

        <div className="mx-auto flex max-w-7xl flex-col items-start px-6 pb-28 pt-10 md:pt-24">
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
            Command the fall of the grid
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            A dystopian tactics game where squads clash across collapsing cityscapes. Every tile matters. Every move ripples across the grid.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#wishlist"
              className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-white/90"
            >
              Wishlist Now
            </a>
            <a
              href="#features"
              className="rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white/90 hover:border-white/40 hover:text-white"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
