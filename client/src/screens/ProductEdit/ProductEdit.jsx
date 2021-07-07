import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getOneProduct, updateProduct, deleteProduct } from '../../services/products';
import { Layout, ProductForm, Button } from '../../components';

const ProductEdit = ({user}) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getOneProduct(id);
      setProduct(product);
    };
    fetchProduct();
    // eslint-disable-next-line
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct(prevVal => ({ ...prevVal, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await updateProduct(id, product);
    history.push(`/product/${id}`);
  }

  async function handleDelete(e) {
    e.preventDefault()
    await deleteProduct(id);
    history.push('/products/all')
  }

  return (
    <Layout user={user}>
      <div className="form">
        <h2 className="form-heading">Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <ProductForm onChange={handleChange} onSubmit={handleSubmit} product={product} />
          <div className="flex">
            <Button text="Update" />
            <Button text="Delete" onClick={handleDelete} />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ProductEdit;
