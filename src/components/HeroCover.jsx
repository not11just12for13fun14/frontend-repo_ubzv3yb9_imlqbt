import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Bell } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-2xl bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-end px-6 pb-10 text-white">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <Bell className="h-4 w-4" /> Real-time digital tokens
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Queueless — Skip the wait. Own your time.
          </h1>
          <p className="text-base text-white/80 md:text-lg">
            Join queues remotely for banks, hospitals, government offices, railways, and more. Get a token, track live progress, and arrive right when it’s your turn.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#browse" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-white shadow hover:bg-emerald-600 active:translate-y-px">
              <Rocket className="h-4 w-4" /> Get a token
            </a>
            <a href="#how" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-white backdrop-blur hover:bg-white/20 active:translate-y-px">
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
