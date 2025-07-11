import { Outlet, NavLink } from "react-router";
import Logo from "../Pages/Shared/Logo/Logo";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <Logo />
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <nav className="flex flex-col space-y-2">
          <NavLink to="/dashboard/profile">My Profile</NavLink>
          <NavLink to="/dashboard/announcements">Announcements</NavLink>
          {/* Role-based nav */}
          {/* For Member */}
          <NavLink to="/dashboard/payment">Make Payment</NavLink>
          <NavLink to="/dashboard/history">Payment History</NavLink>
          {/* For Admin */}
          <NavLink to="/dashboard/manage-members">Manage Members</NavLink>
          <NavLink to="/dashboard/announcement">Make Announcement</NavLink>
          <NavLink to="/dashboard/agreements">Agreement Requests</NavLink>
          <NavLink to="/dashboard/coupons">Manage Coupons</NavLink>
          {/* {userRole === "member" && (
            <>
              <NavLink to="/dashboard/payment">Make Payment</NavLink>
              <NavLink to="/dashboard/history">Payment History</NavLink>
            </>
          )}

          {userRole === "admin" && (
            <>
              <NavLink to="/dashboard/manage-members">Manage Members</NavLink>
              <NavLink to="/dashboard/announcement">Make Announcement</NavLink>
              <NavLink to="/dashboard/agreements">Agreement Requests</NavLink>
              <NavLink to="/dashboard/coupons">Manage Coupons</NavLink>
            </>
          )} */}
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
