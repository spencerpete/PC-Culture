import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../../services/products'
import ProductForm from '../../components/ProductForm/ProductForm'

const ProductEdit = () => {
const [product, setProduct] = useState({})
const {id} = useParams()

useEffect(() => {
  const fetchProduct = async () => {
    console.log(id)
    const product = await getOneProduct(id)
    console.log(product)
    setProduct(product)
  }
  fetchProduct()
},[])

  function handleChange(e) {
    const {name, value} = e.target

  }

  function handleSubmit(e) {
    e.preventDefault()

  }

  return (
    <div className="form">
      <h2 className="form-heading">Edit Product</h2>
      <ProductForm onChange={handleChange} onSubmit={handleSubmit} product={product}/>
    </div>
  )
}

export default ProductEdit
