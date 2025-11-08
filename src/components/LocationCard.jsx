import React from 'react';
import { Clock, Navigation, ChevronRight } from 'lucide-react';

function formatMinutes(mins) {
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}h ${m}m`;
}

export default function LocationCard({ location, onSelect }) {
  const { name, city, type, tokenServing, nextToken, avgServiceTime } = location;
  const queueLength = Math.max(nextToken - tokenServing, 0);
  const estimated = Math.max(queueLength * avgServiceTime, 0);

  return (
    <button
      onClick={() => onSelect(location)}
      className="group flex w-full items-stretch justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:shadow-md"
    >
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-slate-900">{name}</h3>
            <p className="text-xs text-slate-500">{type} • {city}</p>
          </div>
          <ChevronRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-0.5" />
        </div>

        <div className="mt-2 grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-slate-50 p-3 text-center">
            <p className="text-[11px] uppercase tracking-wide text-slate-500">Now Serving</p>
            <p className="text-xl font-bold text-slate-900">{tokenServing}</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 text-center">
            <p className="text-[11px] uppercase tracking-wide text-slate-500">Next Token</p>
            <p className="text-xl font-bold text-slate-900">{nextToken}</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 text-center">
            <p className="text-[11px] uppercase tracking-wide text-slate-500">Est. Wait</p>
            <p className="flex items-center justify-center gap-1 text-xl font-bold text-slate-900">
              <Clock className="h-4 w-4 text-emerald-600" />
              {formatMinutes(estimated)}
            </p>
          </div>
        </div>
      </div>
      <div className="hidden items-center md:flex">
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          <Navigation className="h-4 w-4" /> Get Directions
        </span>
      </div>
    </button>
  );
}
