"use client";

import { usePathname } from 'next/navigation';
import { Home, List, FileText, User, CheckSquare, DollarSign } from 'lucide-react';

const sidebarItems = [
  { name: 'Dashboard', icon: <Home />, href: '/' },
  { name: 'Fleet Management', icon: <List />, href: '/fleet' },
  { name: 'Bookings', icon: <FileText />, href: '/bookings' },
  { name: 'Customers', icon: <User />, href: '/customers' },
  { name: 'Handover & Return', icon: <CheckSquare />, href: '/handover' },
  { name: 'Payments', icon: <DollarSign />, href: '/payments' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-slate-900 border-r border-white/10 w-64 h-screen p-6">
      <div className="font-bold text-2xl mb-6">DriveEase Rentals</div>
      <div className="text-slate-400 mb-8">Car Rental CRM</div>
      <nav>
        {sidebarItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`flex items-center mb-4 text-lg hover:text-slate-100 ${pathname === item.href ? 'text-white' : 'text-slate-400'}`}
          >
            {item.icon}
            <span className="ml-3">{item.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}