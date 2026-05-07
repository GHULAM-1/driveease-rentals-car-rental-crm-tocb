import { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  trend?: string;
  trendType?: 'increase' | 'decrease';
}

export default function StatCard({ icon, label, value, trend, trendType }: StatCardProps) {
  return (
    <div className="bg-slate-900 shadow-md border border-white/10 rounded-xl p-4">
      <div className="flex items-center">
        <div className="mr-4 text-2xl text-brand-accent">
          {icon}
        </div>
        <div>
          <div className="text-xl font-semibold text-slate-100">
            {value}
          </div>
          <div className="text-sm text-slate-400">
            {label}
          </div>
        </div>
      </div>
      {trend && (
        <div className={`text-sm mt-2 ${trendType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
          {trendType === 'increase' ? '↑' : '↓'} {trend}
        </div>
      )}
    </div>
  );
}