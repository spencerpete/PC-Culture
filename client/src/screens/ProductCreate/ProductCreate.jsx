import { useState } from 'react';
import { ProductForm, Button } from '../../components';
import { createProduct } from '../../services/products';

const ProductCreate = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: 'category',
    imgURL: '',
    link: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct(prevVal => ({ ...prevVal, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await createProduct(product);
  }
  return (
    <div className="form">
      <h2 className="form-heading">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <ProductForm onChange={handleChange} product={product} />
        <Button text="Add" />
      </form>
    </div>
  );
};

export default ProductCreate;
