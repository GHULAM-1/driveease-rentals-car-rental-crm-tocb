"use client";

import { useState } from 'react';
import Badge from '@/components/Badge';
import { mockData } from '@/lib/mockData';

export default function CustomersPage() {
  const [search, setSearch] = useState('');

  const filteredCustomers = mockData.customersList.filter(customer =>
    customer.name.toLowerCase().includes(search.toLowerCase()) ||
    customer.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white">Customer Management</h1>
      <button className="mt-2 mb-4 px-4 py-2 bg-blue-600 text-white rounded">Add New Customer</button>

      <div className="my-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or email"
          className="p-2 bg-slate-800 rounded w-full"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-slate-800 rounded">
          <thead>
            <tr>
              <th className="p-2 text-left text-slate-400">Name</th>
              <th className="p-2 text-left text-slate-400">Email</th>
              <th className="p-2 text-left text-slate-400">Phone</th>
              <th className="p-2 text-left text-slate-400">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-4 text-center text-slate-500">
                  No customers found
                </td>
              </tr>
            ) : (
              filteredCustomers.map((customer, index) => (
                <tr key={index} className="border-t border-slate-700 hover:bg-slate-900">
                  <td className="p-2 text-slate-300">{customer.name}</td>
                  <td className="p-2 text-slate-300">{customer.email}</td>
                  <td className="p-2 text-slate-300">{customer.phone}</td>
                  <td className="p-2 text-slate-300"><Badge status={customer.status} /></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}