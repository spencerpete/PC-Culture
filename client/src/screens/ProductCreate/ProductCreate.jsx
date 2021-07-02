import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, ProductForm, Button } from '../../components';
import { createProduct } from '../../services/products';
import './ProductCreate.css';

const ProductCreate = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: 'category',
    imgURL: '',
    link: '',
  });

  const history = useHistory();

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct(prevVal => ({ ...prevVal, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await createProduct(product);
    history.push('/products');
  }
  return (
    <Layout>
      <div className="form .shadow">
        <div className="form-heading">Add Product</div>
        <form onSubmit={handleSubmit}>
          <ProductForm onChange={handleChange} product={product} />
          <Button text="Add" />
        </form>
      </div>
    </Layout>
  );
};

export default ProductCreate;
