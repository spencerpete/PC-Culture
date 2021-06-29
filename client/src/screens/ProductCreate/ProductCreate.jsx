import { useState } from 'react'
import ProductForm from '../../components/ProductForm/ProductForm'

const productSchema = {
  name: '',
  price: '',
  description: '',
  category: '',
  imgeURL: '',
  link: ''
}

function ProductCreate() {
const [product, setProduct] = useState(productSchema)

function handleChange(e) {
  const {name, value} = e.target
  setProduct(prevVal => ({...prevVal, [name]: value}))
}

async function onSubmit(e) {
  e.preventDefault()
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



