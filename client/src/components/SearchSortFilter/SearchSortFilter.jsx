import { Search, Sort, Filter, SideSortBtn } from '../index';
import './SearchSortFilter.css';

const SearchSortFilter = ({ handleSubmit, handleSearch, handleFilter, handleSort, toggleShow }) => {
  return (
    <div className="results-control">
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <Filter handleFilter={handleFilter} className="form-group" />
      <Sort onSubmit={handleSubmit} handleSort={handleSort} className="form-group" />
      <SideSortBtn onClick={toggleShow} />
    </div>
  );
};

export default SearchSortFilter;
