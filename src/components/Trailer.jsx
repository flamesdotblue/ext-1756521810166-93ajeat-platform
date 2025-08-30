import React from 'react';

export default function Trailer() {
  return (
    <section id="trailer" className="relative w-full bg-gradient-to-b from-black to-zinc-950 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">In-field footage</h2>
            <p className="mt-3 text-white/70">Captured from a pre-alpha build. Visuals and systems subject to change.</p>
          </div>
          <a
            href="#wishlist"
            className="hidden rounded-md border border-white/20 px-4 py-2 text-sm text-white/90 transition hover:border-white/40 hover:text-white md:inline-block"
          >
            Wishlist Gridfall
          </a>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60 shadow-2xl">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(255,0,64,0.12),transparent_60%)]" />
          <video
            className="aspect-video w-full"
            controls
            playsInline
            muted
            autoPlay
            loop
            poster="https://images.unsplash.com/photo-1536909526839-5b0d1e1d4d45?q=80&w=1600&auto=format&fit=crop"
          >
            <source src="https://videos.pexels.com/video-files/2072554/2072554-uhd_2560_1440_24fps.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/854685/854685-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-center justify-between gap-3 p-4">
            <div className="rounded-md bg-black/50 px-3 py-2 text-xs text-white/80 ring-1 ring-white/10 backdrop-blur">
              GRIDFALL // Sector 9: Collapse Protocol
            </div>
            <div className="hidden rounded-md bg-black/50 px-3 py-2 text-xs text-white/80 ring-1 ring-white/10 backdrop-blur sm:block">
              Pre-Alpha Footage
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
