import './Filter.css';

const Filter = ({ handleFilter, setFilterType, className, value }) => {

  const filter = event => {
    handleFilter(event.target.value)
    setFilterType(event.target.value)
  }

  return (
    <div className={className}>
      <label className="form-label" htmlFor="filter">
        Filter:
      </label>
      <select className="select" id="filter" value={value} name="category" onChange={filter}>
        <option value="">All</option>
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

export default Filter;
