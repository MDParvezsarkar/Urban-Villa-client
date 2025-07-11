import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/authentication/Login/Login";
import Register from "../Pages/authentication/Login/register/Register";
import Apartments from "../Pages/Apartments/Apartments";
import Error404 from "../Pages/ErrorPage/Error404";
import PrivateRoute from "../components/routes/PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../Pages/dashboard/Profile";
import Announcements from "../Pages/dashboard/Announcements";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/apertment", Component: Apartments },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "profile", element: <Profile /> },
      { path: "announcements", element: <Announcements /> },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);