# 📘 React Router & Routing Concepts Guide

A complete and **comprehensive guide** to **React Router** and general **Routing principles** in modern web development.

---

## 🧭 React Router Core Concepts

| 🔹 Concept                     | 🧠 Description                                                                                                                                      |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BrowserRouter` / `HashRouter` | Top-level routers for web apps. `BrowserRouter` uses the History API (clean URLs), while `HashRouter` uses `#` to keep the UI in sync with the URL. |
| `Routes` & `Route`             | Declarative components that define routing configuration. `Routes` wraps multiple `Route` elements.                                                 |
| `Link` & `NavLink`             | Replace `<a>` tags. `Link` navigates declaratively, while `NavLink` adds styling for active links.                                                  |
| `Navigate`                     | A component that triggers redirect to a different route when rendered.                                                                              |
| `Outlet`                       | Placeholder for nested routes. Enables layout composition.                                                                                          |
| `index`                        | Defines the default child route under a parent route.                                                                                               |
| `path='*'`                     | Wildcard route used to match any path. Commonly used for 404 pages.                                                                                 |
| `errorElement`                 | Error boundary UI for route-specific errors.                                                                                                        |
| `loader`                       | Function to fetch data before rendering a route. Available from React Router v6.4+.                                                                 |
| `action`                       | Handles form submissions and data mutations. Runs before the route renders.                                                                         |
| `defer()`                      | Allows partial data loading and integration with Suspense.                                                                                          |
| `lazy()` + `Suspense`          | Enables code-splitting for routes using dynamic imports.                                                                                            |

---

## 🧪 React Router Hooks (v6.4+)

| 🧷 Hook                | 💡 Purpose                                                              |
| ---------------------- | ----------------------------------------------------------------------- |
| `useNavigate()`        | Imperative navigation. E.g. go forward, back, or to a specific path.    |
| `useParams()`          | Access dynamic URL segments (e.g., `:id`, `:slug`).                     |
| `useLocation()`        | Get current location object including `pathname`, `search`, and `hash`. |
| `useMatch()`           | Match a pattern against the current location pathname.                  |
| `useHref()`            | Generate an HREF string for a given route.                              |
| `useRoutes()`          | Hook-based way to define routes directly inside components.             |
| `useOutlet()`          | Render the element matched by a child route inside a layout.            |
| `useLoaderData()`      | Access data returned by the loader.                                     |
| `useActionData()`      | Access data returned by a route action after a mutation.                |
| `useNavigation()`      | Get current navigation state (idle, loading, submitting).               |
| `useNavigationType()`  | Determine how the navigation was triggered (POP, PUSH, REPLACE).        |
| `useRevalidator()`     | Manually trigger a loader revalidation.                                 |
| `useRouteError()`      | Access the error thrown by a route or its loader.                       |
| `useRouteLoaderData()` | Access loader data from a specific ancestor route by ID.                |

---

## 🧬 Dynamic Routing Concepts

| 🔹 Concept            | 🧠 Description                                                                 |
| --------------------- | ------------------------------------------------------------------------------ |
| `:id`, `:slug`, etc.  | URL parameters used for dynamic matching. Define variables in route paths.     |
| `useParams()`         | Retrieves current route's dynamic segments.                                    |
| Slug                  | Human-readable, SEO-friendly identifier in the URL. Often derived from titles. |
| Nested Dynamic Routes | Combine dynamic paths with `<Outlet />` to show nested content.                |
| Optional Params       | Allow parts of the path to be optional using `:param?`.                        |

---

## 🏗️ Nested Routes & Layouts

| 🔹 Concept     | 🧠 Description                                                               |
| -------------- | ---------------------------------------------------------------------------- |
| Nested Routes  | Enables route hierarchy with children inside parent routes.                  |
| Layout Route   | A route containing shared UI like navbars and sidebars with an `<Outlet />`. |
| Relative Links | Use relative paths for nested route linking.                                 |
| Index Routes   | Child route rendered when the parent route is matched.                       |

---

## 🚦 Navigation Tools

| 🔹 Concept          | 🧠 Description                                                             |
| ------------------- | -------------------------------------------------------------------------- |
| `Link`              | Declarative, client-side navigation. Prevents page reloads.                |
| `NavLink`           | Like `Link`, but automatically applies `active` styling. Useful for menus. |
| `useNavigate()`     | Programmatically navigate forward, back, or to a specific URL.             |
| `replace: true`     | Prevents pushing new history entry on navigation. Replaces current entry.  |
| `scrollRestoration` | Manages scroll behavior across navigations automatically.                  |

---

## 🧪 Special Routing Behaviors

| 🔹 Concept            | 🧠 Description                                                   |
| --------------------- | ---------------------------------------------------------------- |
| `Navigate`            | Component redirect. Use in JSX to change routes.                 |
| `redirect()`          | Redirect in loaders or actions before the component is rendered. |
| Wildcard (`*`) Routes | Catch-all route, often used for 404 fallback.                    |
| Error Boundaries      | Render fallback UI when a route or its loader throws.            |

---

## ⚙️ General Routing Concepts

| 🔹 Concept       | 🧠 Description                                                                   |
| ---------------- | -------------------------------------------------------------------------------- |
| Slug             | SEO-friendly readable URL string (e.g., blog titles).                            |
| Query Parameters | Use `?key=value` format. Access via `useLocation().search` or `URLSearchParams`. |
| Hash Routing     | Uses `#` in URL. Useful for static hosting environments.                         |
| SSR Routing      | Server-rendered routing used in frameworks like Next.js or Remix.                |
| SPA vs MPA       | SPAs load one page and update via JS. MPAs reload on every page.                 |
| Static Routes    | Predefined paths like `/home`, `/about`.                                         |
| Dynamic Routes   | Parameterized paths like `/user/:id`.                                            |
| Route Matching   | Pattern matching engine that maps URLs to route components.                      |

---

## 📚 Code Examples

```jsx
<Route path="/products/:slug" element={<ProductPage />} />

// Inside ProductPage.jsx
const { slug } = useParams();
```

```jsx
<NavLink
  to="/about"
  className={({ isActive }) => isActive ? 'text-blue-500 underline' : ''}
>
  About
</NavLink>
```

```jsx
const navigate = useNavigate();
navigate('/dashboard'); // push
navigate(-1); // go back
navigate('/login', { replace: true }); // replace
```

---

> ✅ **Best Practice:** Structure routes using layout routes with `<Outlet />`, organize configuration into route objects, preload with loaders, defer data when needed, and handle mutations with `action()`. Prefer dynamic routes with semantic slugs for SEO.
