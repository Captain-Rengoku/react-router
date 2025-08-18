import { NavLink, Link } from "react-router";

const NavLinkExplained = () => {
  const linkStyle =
    "px-4 py-2 rounded-md transition-colors duration-200 text-lg font-medium";

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">NavLink vs Link</h1>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">🔗 Link</h2>
          <p className="text-gray-200 mb-2">
            <code>Link</code> is used for navigation but does not apply any styling based on the current active route.
          </p>
          <div className="flex gap-4">
            <Link to="/" className={`${linkStyle} bg-gray-700 text-white hover:bg-gray-600`}>
              Home
            </Link>
            <Link to="/blog" className={`${linkStyle} bg-gray-700 text-white hover:bg-gray-600`}>
              Blog
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">🧭 NavLink</h2>
          <p className="text-gray-200 mb-2">
            <code>NavLink</code> works just like <code>Link</code> but automatically adds an <code>active</code> class (or custom class) when the link matches the current route.
          </p>
          <div className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkStyle} ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${linkStyle} ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`
              }
            >
              Blog
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLinkExplained;
