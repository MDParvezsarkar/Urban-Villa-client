import { Link } from "react-router";
"use client";
import {
  Navbar as AceternityNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../../../components/ui/resizable-navbar";

import { useState } from "react";
import { toast } from "react-toastify";
import { FaSignOutAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((err) => console.error(err));
  };

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Apartment", link: "/apertment" },
  ];

  return (
    <div className="relative w-full">
      <AceternityNavbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={navItems}
            onItemClick={() => setIsMobileMenuOpen(false)}
            className="text-lg"
          />
          <div className="flex items-center gap-4">
            {!user ? (
              <NavbarButton variant="secondary">
                <Link to="/login">Login</Link>
              </NavbarButton>
            ) : (
              <div className="relative">
                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="cursor-pointer tooltip tooltip-bottom"
                  data-tip={user.displayName}
                >
                  <img
                    src={
                      user.photoURL || "https://i.ibb.co/tPZyGv4X/avatar.jpg"
                    }
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-[var(--color-brand)]"
                  />
                </div>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-md z-50 p-2">
                    <p className="text-gray-800 font-semibold px-2 mb-2">
                      {user.displayName}
                    </p>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          to="/dashboard"
                          className="flex items-center gap-2 hover:text-[var(--color-brand)] px-2"
                        >
                          <MdDashboard />
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-2 text-red-600 hover:text-red-800 px-2"
                        >
                          <FaSignOutAlt />
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                to={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}

            <div className="flex w-full flex-col gap-4 mt-4">
              {!user ? (
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  <Link to="/login">Login</Link>
                </NavbarButton>
              ) : (
                <>
                  <Link
                    to="/dashboard"
                    className="w-full text-center py-2 rounded-md bg-neutral-100 dark:bg-neutral-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-center py-2 rounded-md bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-800 dark:hover:bg-red-700"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </AceternityNavbar>
    </div>
  );
};

export default Navbar;
