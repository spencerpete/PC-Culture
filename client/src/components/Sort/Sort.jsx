const Sort = props => {
  const handleSort = event => {
    props.handleSort(event.target.value);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="sort">SORT BY:</label>
      <select className="select" onChange={handleSort}>
        <option value="price-ascending">&nbsp; Price, low to high &nbsp;</option>
        <option value="price-descending">&nbsp; Price, high to low &nbsp;</option>
        <option value="name-ascending">&nbsp; Alphabetically, A-Z &nbsp;</option>
        <option value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
      </select>
    </form>
  );
};

export default Sort;
