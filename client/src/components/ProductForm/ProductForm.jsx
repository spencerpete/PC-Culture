import Select from '../Select/Select';

const ProductForm = ({ onChange, onSubmit, product }) => {
  return (
    <form onSubmit={onSubmit}>
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
      <Select onChange={onChange} />
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
    </form>
  );
};

export default ProductForm;
