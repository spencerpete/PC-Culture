import { Search, Sort, Filter, SideSortBtn } from '../index';
import './SearchSortFilter.css';

const SearchSortFilter = ({ handleSubmit, handleSearch, handleFilter, handleSort, toggleShow }) => {
  return (
    <div className="results-control">
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <Filter handleFilter={handleFilter} />
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <SideSortBtn onClick={toggleShow}/>
    </div>
  );
};

export default SearchSortFilter;
