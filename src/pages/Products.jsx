import { Link } from "react-router";
import data from "./products.json"

const Products = () => {
  const products = data
  return (
    <div className='flex flex-col m-8 items-center'>
      <h1 className='font-bold text-4xl'>Product List Page</h1>
      <ul className="space-y-2 my-4">
      { products.map((product) => (
        <li key={product.id}>
          <Link to={`/products/${product.id}/${product.name}`}>{product.name}</Link>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Products
