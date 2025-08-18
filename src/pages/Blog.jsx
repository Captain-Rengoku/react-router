import { Link, NavLink, Outlet } from "react-router";
import NavLinkExplained from "../components/NavLinkExplained"

const Blog = () => {
  const BlogList = [
    { to: "blog-welcome", label: "Blog Welcome" },
    { to: "blog-one", label: "Blog One" },
    { to: "blog-two", label: "Blog Two" },
    { to: "blog-three", label: "Blog Three" },
  ];

  const baseClass =
    "text-blue-400 underline-offset-4 transition-colors hover:underline";

  return (
    <div className="p-6 flex flex-col justify-center items-center">
      <NavLinkExplained/>
      <h1 className="text-2xl font-bold mb-4">This is Blog Page</h1>

      <div className="w-full max-w-3xl">
        <h2 className="text-xl font-semibold">🔗 Using Link (No active styling)</h2>
        <p>Use Link tag when the link doesn't need active styling</p>
        <ul className="flex gap-6 mt-4 mb-8">
          {BlogList.map(({ to, label }) => (
            <li key={`link-${to}`}>
              <Link 
              to={to} 
              // we can't use end prop or Active prop in Link
              className={baseClass}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-2">🧭 Using NavLink (With active styling)</h2>
        <ul className="flex gap-6 mb-6">
          {BlogList.map(({ to, label }) => (
            <li key={`navlink-${to}`}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `${baseClass} ${
                    isActive ? "text-blue-500 underline" : ""
                  }`
                }
              >
                {({isActive}) => isActive ? `👉 ${label}` : label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <Outlet />
    </div>
  );
};

export default Blog;
