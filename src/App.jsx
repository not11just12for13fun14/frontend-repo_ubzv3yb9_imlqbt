import React, { useMemo, useState } from 'react';
import HeroCover from './components/HeroCover';
import FilterBar from './components/FilterBar';
import LocationCard from './components/LocationCard';
import TokenModal from './components/TokenModal';

const SAMPLE_LOCATIONS = [
  {
    id: 1,
    name: 'HBL - Fortress Stadium Branch',
    city: 'Lahore',
    type: 'Bank',
    tokenServing: 1042,
    nextToken: 1051,
    avgServiceTime: 3, // minutes per token
  },
  {
    id: 2,
    name: 'NADRA Mega Center - DHA',
    city: 'Karachi',
    type: 'Government',
    tokenServing: 210,
    nextToken: 228,
    avgServiceTime: 5,
  },
  {
    id: 3,
    name: 'Shaukat Khanum OPD Registration',
    city: 'Lahore',
    type: 'Hospital',
    tokenServing: 512,
    nextToken: 520,
    avgServiceTime: 6,
  },
  {
    id: 4,
    name: 'Pakistan Railways — Lahore Junction Ticketing',
    city: 'Lahore',
    type: 'Railway',
    tokenServing: 92,
    nextToken: 101,
    avgServiceTime: 4,
  },
  {
    id: 5,
    name: 'McBurger — Zamzama',
    city: 'Karachi',
    type: 'Restaurant',
    tokenServing: 302,
    nextToken: 316,
    avgServiceTime: 2,
  },
];

export default function App() {
  const [filters, setFilters] = useState({ city: '', type: '', wait: '' });
  const [selection, setSelection] = useState(null);
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    return SAMPLE_LOCATIONS.filter((loc) => {
      if (filters.city && loc.city !== filters.city) return false;
      if (filters.type && loc.type !== filters.type) return false;
      if (filters.wait) {
        const queueLength = Math.max(loc.nextToken - loc.tokenServing, 0);
        const estimated = queueLength * loc.avgServiceTime;
        if (estimated > Number(filters.wait)) return false;
      }
      return true;
    });
  }, [filters]);

  function handleSelect(location) {
    setSelection(location);
    setOpen(true);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl space-y-10 px-4 py-6 md:py-10">
        <HeroCover />

        <section id="browse" className="space-y-4">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Find a location</h2>
              <p className="text-sm text-slate-600">Filter by city, service type, and current wait time.</p>
            </div>
          </div>

          <FilterBar filters={filters} onChange={setFilters} />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {filtered.map((loc) => (
              <LocationCard key={loc.id} location={loc} onSelect={handleSelect} />
            ))}
          </div>
        </section>

        <section id="how" className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">How Queueless works</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
            <li>Select your city and service type.</li>
            <li>Pick a branch or counter with an acceptable wait.</li>
            <li>Reserve a digital token remotely.</li>
            <li>Track live progress and arrive when you’re a few numbers away.</li>
          </ol>
        </section>
      </div>

      <TokenModal open={open} onClose={() => setOpen(false)} selection={selection} />
    </div>
  );
}
