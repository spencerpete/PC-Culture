import Select from '../Select/Select';

const ProductForm = ({ onChange, onSubmit, product }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={onChange} />
      <input type="text" name="price" placeholder="Price" onChange={onChange} />
      <textarea name="description" placeholder="Description" onChange={onChange} />
      <Select onChange={onChange} />
      <input type="text" name="imgURL" placeholder="Image URL" onChange={onChange} />
      <input type="text" name="link" placeholder="Link to Buy" onChange={onChange} />
    </form>
  );
};

export default ProductForm;
