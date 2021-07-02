import Select from '../Select/Select';
import './ProductForm.css';
import { FaDollarSign } from 'react-icons/fa';

const ProductForm = ({ onChange, product }) => {
  return (
    <>
      <div className="input-wrapper">
        <input
          type="text"
          name="name"
          value={product?.name}
          placeholder=" Name"
          onChange={onChange}
        />
      </div>
      <div className="input-wrapper">
        <div className="icon">
          <FaDollarSign />
        </div>
        <input
          type="text"
          name="price"
          value={product?.price}
          placeholder=" Price"
          onChange={onChange}
        />
      </div>
      <div className="input-wrapper">
        <textarea
          name="description"
          value={product?.description}
          placeholder=" Description"
          onChange={onChange}
        />
      </div>
      <div className="input-wrapper">
        <Select className={'product-form-select'} onChange={onChange} value={product?.category} />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          value={product?.imgURL}
          name="imgURL"
          placeholder=" Image URL"
          onChange={onChange}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          value={product?.link}
          name="link"
          placeholder=" Link to Buy"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default ProductForm;
