import React from 'react';

const Select = ({ onChange }) => {
  return (
    <div>
      <select name="category" onChange={onChange}>
        <option value="" disabled selected>Category</option>
        <option value="cpu">CPU</option>
        <option value="ram">RAM</option>
        <option value="motherboard">Motherboard</option>
        <option value="gpu">GPU</option>
        <option value="storage">Storage</option>
        <option value="case">Case</option>
        <option value="power supply">Power Supply</option>
      </select>
    </div>
  );
};

export default Select;
