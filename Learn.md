# React Router Dom

learned from -- <https://www.youtube.com/watch?v=VeWdk4D_xYs&t=12s&ab_channel=CodeHelp-byBabbar>

## 🔧 Install and SetUp

First go to react router docs website -- <https://reactrouter.com/start/data/installation>
then install `React Rouer Dom` -- npm install react-router-dom

- then go to main.jsx file and import browserRouter from react-router
  - import {BrowserRouter} from 'react-router'
- then wrap the BrowserRouter aroud the App component

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

## ❓ "Why do we need React Router?"

- React Router allows React applications to implement navigation between different components or pages without refreshing the browser, enabling the experience of a Single Page Application (SPA).
- In traditional websites, navigation between pages requires full-page reloads, which is slow and loses app state.
- React, being a Single Page Application (SPA) framework, renders UI dynamically using JavaScript.

- However, React doesn’t have built-in routing, so we need React Router to:
  - Define routes and paths in a declarative way
  - Navigate between pages/components without reloading the browser
  - Maintain browser history and URL sync with app state
  - Pass dynamic route parameters (e.g., /user/:id)
  - Support nested routes, redirects, route protection, etc.

## Use of react-router

```bash
src/
├── components/        # Reusable UI components (e.g. Navbar, Footer)
├── pages/             # All your page components (Home, About, etc.)
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── App.jsx            # Main component where routing is defined
├── main.jsx           # Entry point (renders App)
└── index.css
```

### 🌐 How to Route Pages with React Router

```jsx
// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* 404 fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

Routes
Route
Splats
notfound page route
path
Link with to
NavLink with active and end props
Nested Routing, outlet and Layout
Dynamic Route
Relative Path
Route Prefixes
useParams()
Static Segment
Dynamic Segment
Optional Segment with Static Segment
Optional Segment with Dynamic Segment
use Navigate
Route Params
URL Search Params
Location Object
