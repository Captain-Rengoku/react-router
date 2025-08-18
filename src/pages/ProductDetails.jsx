import { useParams } from 'react-router'
import data from "./products.json"

const ProductDetails = () => {
  const Params = useParams();
  const id = Number(Params.id_custom_name)
  const product = data.find(p => p.id === id)

  if (!product) {
    return <div className="text-red-500 text-xl p-4">Product not found.</div>;
  }

  // It return an object with the id_custom_name that you have given
  //<Route path='/products/:id_custom_name' element={<ProductDetails />} />
  // while creating your route
  return (
    <div>
      <h1 className='text-3xl'>Product Details page</h1>
      <h3 className='text-xl'>Product id is: {product.id}</h3>
      <h2 className='text-2xl'>Product is: {product.name} </h2>
      <h3 className='text-xl'>Product from Params: {Params.id_custom_name}</h3>
      <h2 className='text-2xl'>Product from Params: {Params.name} </h2>
    </div>
  )
}

export default ProductDetails
