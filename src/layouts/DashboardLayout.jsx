import { Outlet, NavLink } from "react-router";
import Logo from "../Pages/Shared/Logo/Logo";
import useRole from "../hooks/useRole"; 

const DashboardLayout = () => {
  const { role, isLoading } = useRole(); 

  if (isLoading) {
    return <p className="text-center">Loading dashboard...</p>;
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <Logo />
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <nav className="flex flex-col space-y-2">
          {/* Common Links */}
          <NavLink to="/dashboard/profile">My Profile</NavLink>
          <NavLink to="/dashboard/announcements">Announcements</NavLink>

          {/* Member Links */}
          {role === "member" && (
            <>
              <NavLink to="/dashboard/make-payment">Make Payment</NavLink>
              <NavLink to="/dashboard/payment-history">Payment History</NavLink>
            </>
          )}

          {/* Admin Links */}
          {role === "admin" && (
            <>
              <NavLink to="/dashboard/admin-profile">Admin Profile</NavLink>
              <NavLink to="/dashboard/manage-members">Manage Members</NavLink>
              <NavLink to="/dashboard/make-announcement">
                Make Announcement
              </NavLink>
              <NavLink to="/dashboard/agreement-requests">
                Agreement Requests
              </NavLink>
              <NavLink to="/dashboard/manage-coupons">Manage Coupons</NavLink>
            </>
          )}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
