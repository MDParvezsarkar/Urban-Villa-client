import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router";
import AuthProvider from "./contexts/AuthContext/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-full mx-[60px] px-4">
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer position="top-center" />
      </AuthProvider>
    </div>
  </StrictMode>
);
