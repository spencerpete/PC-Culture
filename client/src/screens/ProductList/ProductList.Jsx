import { useState, useEffect } from 'react';
import { getProducts } from '../../services/products';
import Layout from '../../components/Layout/Layout';
import Product from '../../components/Product/product';
import Search from '../../components/Search/Search';

const ProductList = props => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const listProducts = await getProducts();
      setProducts(listProducts);
    };
    fetchProducts();
  }, []);

  const handleSubmit = event => event.preventDefault();

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} />
      <div>
        {products.map((product, index) => {
          return (
            <Product
              _id={product._id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
              key={index}
            />
          );
        })}
      </div>
    </Layout>
  );
};
export default ProductList;
