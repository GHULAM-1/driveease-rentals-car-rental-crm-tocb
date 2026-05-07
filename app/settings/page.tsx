export default function SettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white">Settings</h1>

      <div className="py-6 space-y-4">
        <div className="bg-slate-800 p-4 rounded-lg">
          <h2 className="text-xl text-white">Profile</h2>
          <p className="mt-2 text-slate-300">Manage your profile information</p>
        </div>

        <div className="bg-slate-800 p-4 rounded-lg">
          <h2 className="text-xl text-white">Branches</h2>
          <p className="mt-2 text-slate-300">Manage branch locations and access</p>
        </div>

        <div className="bg-slate-800 p-4 rounded-lg">
          <h2 className="text-xl text-white">Notifications</h2>
          <p className="mt-2 text-slate-300">Set your notification preferences</p>
        </div>
      </div>
    </div>
  );
}