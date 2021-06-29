import React from 'react';

const ProductForm = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Name" onChange={onChange} />
      <input type="text" placeholder="Price" onChange={onChange} />
      <textarea placeholder="Description" />
      <input type="select" placeholder="Category" onChange={onChange} />
      <input type="text" placeholder="Image URL" onChange={onChange} />
      <input type="text" placeholder="Link to Buy" onChange={onChange} />
    </form>
  );
}

export default ProductForm