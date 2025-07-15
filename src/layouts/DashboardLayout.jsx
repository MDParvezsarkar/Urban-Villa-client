import { Outlet, NavLink } from "react-router";
import Logo from "../Pages/Shared/Logo/Logo";
import useRole from "../hooks/useRole";
import MoonLoaderComponent from "../Pages/Shared/Loader/MoonLoaderComponent";
import DynamicTitle from "../Pages/Shared/pageTitle/DynamicTitle";

const DashboardLayout = () => {
  const { role, isLoading } = useRole();

  if (isLoading) {
    return <MoonLoaderComponent />;
  }

  // ✅ Active class styling
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "bg-white text-primary font-semibold px-4 py-2 rounded-md"
      : "hover:bg-white hover:text-primary px-4 py-2 rounded-md transition";

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <Logo />
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <nav className="flex flex-col space-y-2">
          {/* Common Links */}
          <NavLink to="/dashboard/announcements" className={navLinkClass}>
            Announcements
          </NavLink>
          {/* Member & User */}
          {(role === "member" || role === "user") && (
            <NavLink to="/dashboard/profile" className={navLinkClass}>
              My Profile
            </NavLink>
          )}

          {/* Member Links */}
          {role === "member" && (
            <>
              <NavLink to="/dashboard/make-payment" className={navLinkClass}>
                Make Payment
              </NavLink>
              <NavLink to="/dashboard/payment-history" className={navLinkClass}>
                Payment History
              </NavLink>
            </>
          )}

          {/* Admin Links */}
          {role === "admin" && (
            <>
              <NavLink to="/dashboard/admin-profile" className={navLinkClass}>
                Admin Profile
              </NavLink>
              <NavLink to="/dashboard/manage-members" className={navLinkClass}>
                Manage Members
              </NavLink>
              <NavLink
                to="/dashboard/make-announcement"
                className={navLinkClass}
              >
                Make Announcement
              </NavLink>
              <NavLink
                to="/dashboard/agreement-requests"
                className={navLinkClass}
              >
                Agreement Requests
              </NavLink>
              <NavLink to="/dashboard/manage-coupons" className={navLinkClass}>
                Manage Coupons
              </NavLink>
            </>
          )}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <DynamicTitle />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
