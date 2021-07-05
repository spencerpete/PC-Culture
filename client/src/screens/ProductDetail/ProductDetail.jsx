import React, { useState, useEffect } from 'react';
import { Layout, ProductCard } from '../../components';
import { getOneProduct } from '../../services/products';
import { useParams } from 'react-router-dom';

const ProductDetail = ({user}) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const Oneproduct = await getOneProduct(id);
      setProduct(Oneproduct);
    };
    fetchProducts();
  }, [id]);

  return (
    <Layout user={user}>
      <ProductCard product={product} user={user}/>
    </Layout>
  );
};

export default ProductDetail;
