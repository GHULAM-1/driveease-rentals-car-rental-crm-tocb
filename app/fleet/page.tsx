"use client";

import { useState } from 'react';
import Badge from '@/components/Badge';
import { mockData } from '@/lib/mockData';

export default function FleetPage() {
  const [search, setSearch] = useState('');

  const filteredCars = mockData.cars.filter(car =>
    car.model.toLowerCase().includes(search.toLowerCase()) ||
    car.registration.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white">Fleet Management</h1>
      <button className="mt-2 mb-4 px-4 py-2 bg-blue-600 text-white rounded">Add New Car</button>

      <div className="my-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by model or registration"
          className="p-2 bg-slate-800 rounded w-full"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-slate-800 rounded">
          <thead>
            <tr>
              <th className="p-2 text-left text-slate-400">Registration</th>
              <th className="p-2 text-left text-slate-400">Model</th>
              <th className="p-2 text-left text-slate-400">Year</th>
              <th className="p-2 text-left text-slate-400">Location</th>
              <th className="p-2 text-left text-slate-400">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredCars.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-4 text-center text-slate-500">
                  No cars found
                </td>
              </tr>
            ) : (
              filteredCars.map((car) => (
                <tr key={car.registration} className="border-t border-slate-700 hover:bg-slate-900">
                  <td className="p-2 text-slate-300">{car.registration}</td>
                  <td className="p-2 text-slate-300">{car.model}</td>
                  <td className="p-2 text-slate-300">{car.year}</td>
                  <td className="p-2 text-slate-300">{car.location}</td>
                  <td className="p-2 text-slate-300"><Badge status={car.status} /></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}