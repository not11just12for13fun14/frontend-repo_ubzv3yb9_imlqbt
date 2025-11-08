import React from 'react';
import { MapPin, Building2, Timer } from 'lucide-react';

export default function FilterBar({ filters, onChange }) {
  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-slate-500" />
          <select
            value={filters.city}
            onChange={(e) => onChange({ ...filters, city: e.target.value })}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
          >
            <option value="">All Cities</option>
            <option>Lahore</option>
            <option>Karachi</option>
            <option>Islamabad</option>
            <option>Rawalpindi</option>
            <option>Faisalabad</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-slate-500" />
          <select
            value={filters.type}
            onChange={(e) => onChange({ ...filters, type: e.target.value })}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
          >
            <option value="">All Services</option>
            <option>Bank</option>
            <option>Hospital</option>
            <option>Government</option>
            <option>Railway</option>
            <option>Restaurant</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <Timer className="h-5 w-5 text-slate-500" />
          <select
            value={filters.wait}
            onChange={(e) => onChange({ ...filters, wait: e.target.value })}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
          >
            <option value="">Any Wait</option>
            <option value="15">Under 15 min</option>
            <option value="30">Under 30 min</option>
            <option value="60">Under 1 hour</option>
          </select>
        </div>
      </div>
    </div>
  );
}
