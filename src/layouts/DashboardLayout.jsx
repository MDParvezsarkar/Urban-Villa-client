import { Outlet, NavLink } from "react-router";
import Logo from "../Pages/Shared/Logo/Logo";
import useRole from "../hooks/useRole";
import MoonLoaderComponent from "../Pages/Shared/Loader/MoonLoaderComponent";
import DynamicTitle from "../Pages/Shared/pageTitle/DynamicTitle";

const DashboardLayout = () => {
  const { role, isLoading } = useRole();

  if (isLoading) return <MoonLoaderComponent />;

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-full md:w-64 p-4">
        <div className="flex justify-between items-center md:block mb-4 md:mb-0">
          <Logo />
        </div>
        <h2 className="text-2xl font-bold mb-4 hidden md:block">Dashboard</h2>
        <nav className="flex md:flex-col gap-2 flex-wrap">
          {/* Member Links */}
          {role === "member" && (
            <>
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary font-semibold"
                    : "hover:text-gray-300"
                }
              >
                My Profile
              </NavLink>
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

          {/* Shared Links */}
          <NavLink to="/dashboard/announcements">Announcements</NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-4 md:p-6">
        <DynamicTitle />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
