import React from 'react';

const features = [
  {
    title: 'Collapsing Cityscapes',
    desc: 'Dynamic environments crumble under pressure. Trigger chain reactions and reshape the battlefield in real time.',
  },
  {
    title: 'Gridbound Tactics',
    desc: 'Every tile is an opportunity. Use elevation, exposure, and cover to outmaneuver enemy squads.',
  },
  {
    title: 'Ripple Systems',
    desc: 'Actions propagate across the board—energy surges, suppression waves, and domino effects that change outcomes.',
  },
  {
    title: 'Custom Squads',
    desc: 'Assemble specialists with unique roles. Upgrade gear, hack the grid, and risk permadeath for high reward plays.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative isolate w-full bg-black px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Tactics sharpened by collapse</h2>
          <p className="mt-3 text-white/70">Designed for decisive thinkers who thrive on precision, risk, and momentum.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10">
              <div className="mb-3 h-8 w-8 rounded bg-red-500/80 ring-1 ring-red-300/40" />
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
