import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, ProductForm, Button } from '../../components';
import { createProduct } from '../../services/products';
import './ProductCreate.css';

const ProductCreate = ({ user }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: 'category',
    imgURL: '',
    link: '',
    userId: user.id,
  });

  const history = useHistory();

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct(prevVal => ({ ...prevVal, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await createProduct(product);
    history.push('/products/all');
  }

  return (
    <Layout user={user}>
      <div className="form shadow-lg bg-white">
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
