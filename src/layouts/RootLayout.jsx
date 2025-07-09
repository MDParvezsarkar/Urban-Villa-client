import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const RootLayout = () => {
    return (
      <div>
        <Navbar />
        <div className="min-h-[calc(100vh-277px)]">
          <Outlet></Outlet>
        </div>
        <Footer />
      </div>
    );
};

export default RootLayout;