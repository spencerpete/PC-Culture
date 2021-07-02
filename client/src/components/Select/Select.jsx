import React from 'react';

const Select = ({ onChange, value }) => {
  return (
    <select
      className="w-full flex focus:outline-none bg-white opacity-50"
      value={value}
      name="category"
      onChange={onChange}
    >
      <option value="category" disabled>
        Category
      </option>
      <option value="cpu">CPU</option>
      <option value="ram">RAM</option>
      <option value="motherboard">Motherboard</option>
      <option value="gpu">GPU</option>
      <option value="storage">Storage</option>
      <option value="case">Case</option>
      <option value="power supply">Power Supply</option>
    </select>
  );
};

export default Select;
