import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneProduct, updateProduct } from '../../services/products';
import { ProductForm, Button } from '../../components';

const ProductEdit = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getOneProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct(prevVal => ({ ...prevVal, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const product = await updateProduct(id, product);
  }

  return (
    <div className="form">
      <h2 className="form-heading">Edit Product</h2>
      <ProductForm onChange={handleChange} onSubmit={handleSubmit} product={product} />
      <Button text="Update"/>
      <Button text="Delete"/>
    </div>
  );
};

export default ProductEdit;
