import { useState } from "react";
import { NavLink } from "react-router";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/user/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/products", label: "Products" },
  { to: "/products/list", label: "List" },
  { to: "/random-url", label: "Random URL" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-screen bg-gray-800 text-white shadow-md px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-gray-300">Logo</NavLink>
        </div>

        {/* Hamburger icon for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              // we can use end prop and isActive in NavLink
              // only apply `end` for /blog-welcome
              end={to === "/blog" || to === "/products"} 
              className={({ isActive }) =>
                `block py-1 text-lg hover:text-gray-300
                ${isActive ? "text-blue-500 underline underline-offset-4" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white px-4 pb-4 space-y-2">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              // we can use end prop and isActive in NavLink
              // only apply `end` for /blog-welcome
              end={to === "/blog" || to === "/products"} 
              className={({ isActive }) =>
                `block py-1 text-lg hover:text-gray-300
                ${isActive ? "text-blue-500 underline underline-offset-4" : ""}`
              }
              onClick={() => setMenuOpen(false)} // close on click
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}
