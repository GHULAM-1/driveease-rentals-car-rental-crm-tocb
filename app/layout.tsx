import './globals.css';
import { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'DriveEase Rentals - Car Rental CRM',
  description: 'Dashboard for managing the DriveEase Rentals car fleet, bookings, customers, and more.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100">
        <div className="flex">
          <Sidebar />
          <main className='flex-1 p-8'>{children}</main>
        </div>
      </body>
    </html>
  );
}