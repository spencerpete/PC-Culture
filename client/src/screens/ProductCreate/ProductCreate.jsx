import { useState } from 'react'
import ProductForm from '../../components/ProductForm/ProductForm'
import { createProduct } from '../../services/products'

const productSchema = {
  name: '',
  price: '',
  description: '',
  category: '',
  imgeURL: '',
  link: ''
}

const ProductCreate = () => {
const [product, setProduct] = useState(productSchema)

function handleChange(e) {
  const {name, value} = e.target
  setProduct(prevVal => ({...prevVal, [name]: value}))
}

async function handleSubmit(e) {
  e.preventDefault()
  await createProduct(product)
}
  return (
    <div className="form">
      <h2 className="form-heading">Add Product</h2>
      <ProductForm onChange={handleChange} onSubmit={handleSubmit}/>
      {/* <Button /> */}
    </div>
  )
}

export default ProductCreate
