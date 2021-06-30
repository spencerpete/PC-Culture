import React, {useState, useEffect} from 'react'
import { Layout, ProductCard } from "../../components"
import { getOneProduct } from "../../services/products"
import {useParams} from 'react-router-dom'


const ProductDetail = () => {
const [product, setProduct] = useState({})
const {id} = useParams()



useEffect (() => {
    const fetchProducts = async () => {
        const Oneproduct = await getOneProduct(id)
        setProduct(Oneproduct)
    } 
    fetchProducts()
}, [id])

    return (
        <Layout>
            <ProductCard product={product} />
        </Layout>
    )

}

export default ProductDetail