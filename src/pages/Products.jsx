import { Link } from "react-router";
import data from "./products.json";

const Products = () => {
  const products = data;
  return (
    <div className="flex flex-col m-8 items-center">
      <h1 className="font-bold text-4xl">Product List Page</h1>
      <ul className="space-y-2 my-4">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}/${product.name}`}>
              <div className="bg-blue-500 hover:bg-blue-600 font-bold px-8 py-2 rounded-lg cursor-pointer">
                {product.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-gray-300 mt-12">
        Since 'list' is optional segment hence if we go to product or list it's
        the same!
      </p>
      <p className="text-yellow-300">
        {"<Route path='/products/list?' element={<Products />} />"}
      </p>
    </div>
  );
};

export default Products;
