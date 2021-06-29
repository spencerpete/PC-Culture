import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../../services/products'

const ProductEdit = () => {
const [product, setProduct] = useState({})
const {id} = useParams()

useEffect(() => {
  const fetchProduct = async () => {
    const product = await getOneProduct(id)
    setProduct(product)
  }
  fetchProduct()
},[])

  function handleChange(e) {
    const {name, value} = e.target

  }

  function handleSumbit(e) {
    e.preventDefault()
    
  }

  return (
    <div className="form">
      <h2 className="form-heading">Edit Product</h2>
      <ProductForm onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  )
}

export default ProductEdit
