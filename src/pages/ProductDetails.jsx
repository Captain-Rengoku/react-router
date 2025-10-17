import { useParams } from "react-router";
import data from "./products.json";

const ProductDetails = () => {
  const Params = useParams();
  const id = Number(Params.id_custom_name);
  const product = data.find((p) => p.id === id);

  if (!product) {
    return <div className="text-red-500 text-xl p-4">Product not found.</div>;
  }

  // It return an object with the id_custom_name that you have given
  //<Route path='/products/:id_custom_name' element={<ProductDetails />} />
  // while creating your route
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-[90%]">
      <h1 className="text-3xl text-gray-200">Product Details page</h1>
      <div className="bg-blue-500 p-4 rounded-lg font-bold">
        <h3 className="text-xl">
          Product id is: <span className="text-yellow-400">{product.id}</span>
        </h3>
        <h2 className="text-2xl">
          Product is: <span className="text-yellow-400">{product.name}</span>
        </h2>
        <h3 className="text-xl">
          Product from Params: <span className="text-yellow-400">{Params.id_custom_name}</span>
        </h3>
        <h2 className="text-2xl">
          Product from Params: <span className="text-yellow-400">{Params.name}</span>
        </h2>
      </div>
    </div>
  );
};

export default ProductDetails;
