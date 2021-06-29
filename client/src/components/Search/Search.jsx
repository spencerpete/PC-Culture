const Search = props => {
  return (
    <form className="form" onSubmit={e => props.onSubmit(e)}>
      <input
        className="search"
        value={props.value}
        // onChange={e => props.handleSearch(e)}
        name="Search"
        placeholder="Search PC-Culture"
        type="text"
      />
    </form>
  );
};
export default Search;
