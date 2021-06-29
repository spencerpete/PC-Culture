import { useState, useEffect } from 'react';
import { getProducts } from '../../services/products';
import Layout from '../../components';

const ProductList = props => {
  const [products, setProducts] = useState([]);
};

useEffect(() => {
  const fetchProducts = async () => {
    const listProducts = await getProducts();
    setProduct(listProducts);
  };
  fetchProducts();
}, []);
