import './Sort.css'

const Sort = ({handleSort, handleSubmit, className, id}) => {
  const sort = event => {
    handleSort(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={className}>
        <label className="form-label" htmlFor={id}>Sort:</label>
        <select className="select" id={id} onChange={sort}>
          <option value="price-ascending">&nbsp; Price, low to high &nbsp;</option>
          <option value="price-descending">&nbsp; Price, high to low &nbsp;</option>
          <option value="name-ascending">&nbsp; Alphabetically, A-Z &nbsp;</option>
          <option value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
        </select>
      </div>
    </form>
  );
};

export default Sort;
