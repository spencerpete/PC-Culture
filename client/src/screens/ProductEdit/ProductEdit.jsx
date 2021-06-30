import { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getOneProduct, updateProduct, deleteProduct } from '../../services/products';
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
    const upDatedProduct = await updateProduct(id, product);
    <Redirect to={`/products/${id}`} />;
  }

  async function handleDelete() {
    const deleted = await deleteProduct(id);
  }

  return (
    <div className="form">
      <h2 className="form-heading">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <ProductForm onChange={handleChange} onSubmit={handleSubmit} product={product} />
        <Button text="Update" />
        <Button text="Delete" onClick={handleDelete} />
      </form>
    </div>
  );
};

export default ProductEdit;
