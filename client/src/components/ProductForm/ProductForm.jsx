import Select from '../Select/Select';

const ProductForm = ({ onChange, product }) => {
  return (
    <>
      <input type="text" name="name" value={product?.name} placeholder="Name" onChange={onChange} />
      <input
        type="text"
        name="price"
        value={product?.price}
        placeholder="Price"
        onChange={onChange}
      />
      <textarea
        name="description"
        value={product?.description}
        placeholder="Description"
        onChange={onChange}
      />
      <Select onChange={onChange} value={product?.category} />
      <input
        type="text"
        value={product?.imgURL}
        name="imgURL"
        placeholder="Image URL"
        onChange={onChange}
      />
      <input
        type="text"
        value={product?.link}
        name="link"
        placeholder="Link to Buy"
        onChange={onChange}
      />
    </>
  );
};

export default ProductForm;
