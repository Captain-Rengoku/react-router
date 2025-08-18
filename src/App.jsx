import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import BlogWelcome from './Blog/BlogWelcome';
import BlogOne from './Blog/BlogOne';
import BlogTwo from './Blog/BlogTwo';
import BlogThree from './Blog/BlogThree';
import ProductDetails from './pages/ProductDetails';
import Layout from './Layout';

function App() {
  return (
    <Routes>
      {/* Layout */}
      {/* Routes without a path create new nesting for their children,
      but they don't add any segments to the URL. */}
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />

        {/* Route Prefix for about is /user */}
        {/* A <Route path> without an element prop adds a path prefix to its 
        child routes, without introducing a parent layout. */}
        <Route path='/user'>
          <Route path='about' element={<About />} />
        </Route>

        {/* Nested Route */}
        <Route path='/blog' element={<Blog />}>
          {/* Default Route */}
          {/* Index routes render into their parent's <Outlet/> at their parent's URL 
          (like a default child route). They are configured with the index prop: */}
          <Route index element={<BlogWelcome />} />
          {/* nested routes */}
          <Route path='blog-welcome' element={<BlogWelcome />} />
          <Route path='blog-one' element={<BlogOne />} />
          <Route path='blog-two' element={<BlogTwo />} />
          <Route path='blog-three' element={<BlogThree />} />
        </Route>

        {/* Static Segment */}
        {/* <Route path='/products' element={<Products />} /> */}
        {/* Optional Segment by using ? */}
        <Route path='/products/list?' element={<Products />} />

        {/* Dynamic Segment */}
        {/* Relative Path or Dynamic Path */}
        {/* If a path segment starts with : then it becomes a "dynamic segment".*/}
        {/* Mostly we use only 'id' for example let's use id_custom_name */}
        <Route path='/products/:id_custom_name/:name?' element={<ProductDetails />} />
      </Route>
      {/* Splats */}
      {/* Also known as "catchall" and "star" segments. If a route 
      path pattern ends with /* then it will match any characters 
      following the /, including other / characters. */}
      {/* NotFound Page Route */}
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}

export default App;