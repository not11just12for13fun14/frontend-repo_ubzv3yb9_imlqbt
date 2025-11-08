import React from 'react';
import { X, BadgeCheck, Clock } from 'lucide-react';

export default function TokenModal({ open, onClose, selection }) {
  if (!open || !selection) return null;
  const { name, type, city, nextToken, avgServiceTime } = selection;
  const estimated = avgServiceTime * Math.max(nextToken - selection.tokenServing, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Reserve Digital Token</h3>
            <p className="text-sm text-slate-500">{type} • {city}</p>
          </div>
          <button onClick={onClose} className="rounded-full p-2 text-slate-500 hover:bg-slate-100">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">Location</p>
            <p className="text-base font-medium text-slate-900">{name}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-slate-50 p-4 text-center">
              <p className="text-[11px] uppercase tracking-wide text-slate-500">Your Token</p>
              <p className="text-2xl font-bold text-slate-900">{nextToken}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 text-center">
              <p className="text-[11px] uppercase tracking-wide text-slate-500">Est. Time</p>
              <p className="flex items-center justify-center gap-2 text-2xl font-bold text-slate-900">
                <Clock className="h-5 w-5 text-emerald-600" />
                {estimated} min
              </p>
            </div>
          </div>

          <button
            onClick={() => onClose()}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white shadow hover:bg-emerald-700"
          >
            <BadgeCheck className="h-5 w-5" /> Confirm Reservation
          </button>
          <p className="text-xs text-slate-500">You’ll receive reminders as your turn approaches.</p>
        </div>
      </div>
    </div>
  );
}
