import './Search.css'

const Search = props => {
  return (
    <form onSubmit={e => props.onSubmit(e)}>
      <input
        className="search"
        value={props.value}
        onChange={e => props.handleSearch(e)}
        name="Search"
        placeholder="Search"
        type="text"
      />
    </form>
  );
};
export default Search;
