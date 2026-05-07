import StatCard from '@/components/StatCard';
import Badge from '@/components/Badge';
import { mockData } from '@/lib/mockData';

export default function Page() {
  const actionPoints = [
    { title: 'Fleet Management Module', status: 'In Progress' },
    { title: 'Booking System', status: 'Planned' },
    { title: 'Customer Management Module', status: 'Planned' },
    { title: 'Vehicle Handover Checklist', status: 'Done' },
    { title: 'Payments and Invoicing', status: 'In Progress' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white">Welcome to the Car Rental CRM Dashboard</h1>
      <p className="text-slate-400">Manage your rentals efficiently and effectively</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
        <StatCard title="Total Cars" value={mockData.totalCars} />
        <StatCard title="Active Bookings" value={mockData.activeBookings} />
        <StatCard title="Monthly Revenue" value={`$${mockData.monthlyRevenue}`} />
        <StatCard title="Customers" value={mockData.customers} />
      </div>

      <div className="py-6">
        <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
        <div className="mt-4 bg-slate-800 rounded-lg p-4">
          <ul>
            {mockData.recentActivity.slice(0, 8).map((activity, index) => (
              <li key={index} className="text-slate-300">
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="py-6">
        <h2 className="text-xl font-semibold text-white">Action Points Progress</h2>
        <div className="mt-4 bg-slate-800 rounded-lg p-4">
          {actionPoints.map((actionPoint, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <span className="text-slate-300">{actionPoint.title}</span>
              <Badge status={actionPoint.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}