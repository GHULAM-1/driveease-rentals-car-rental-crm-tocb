"use client";

import { useState } from 'react';
import Badge from '@/components/Badge';
import { mockData } from '@/lib/mockData';

export default function BookingsPage() {
  const [query, setQuery] = useState('');

  const filteredBookings = mockData.bookings.filter(booking =>
    booking.carModel.toLowerCase().includes(query.toLowerCase()) ||
    booking.customerName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white">Bookings System</h1>
      <button className="mt-2 mb-4 px-4 py-2 bg-blue-600 text-white rounded">Add New Booking</button>

      <div className="my-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by car model or customer name"
          className="p-2 bg-slate-800 rounded w-full"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-slate-800 rounded">
          <thead>
            <tr>
              <th className="p-2 text-left text-slate-400">Customer Name</th>
              <th className="p-2 text-left text-slate-400">Car Model</th>
              <th className="p-2 text-left text-slate-400">Date Range</th>
              <th className="p-2 text-left text-slate-400">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-4 text-center text-slate-500">
                  No bookings found
                </td>
              </tr>
            ) : (
              filteredBookings.map((booking, index) => (
                <tr key={index} className="border-t border-slate-700 hover:bg-slate-900">
                  <td className="p-2 text-slate-300">{booking.customerName}</td>
                  <td className="p-2 text-slate-300">{booking.carModel}</td>
                  <td className="p-2 text-slate-300">{booking.dateRange}</td>
                  <td className="p-2 text-slate-300"><Badge status={booking.status} /></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}