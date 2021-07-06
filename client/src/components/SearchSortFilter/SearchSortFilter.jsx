import { Search, Sort, Filter, SideSortBtn } from '../index';
import './SearchSortFilter.css';

const SearchSortFilter = ({
  handleSubmit,
  handleSearch,
  handleFilter,
  setFilterType,
  handleSort,
  toggleShow,
  category,
}) => {
  return (
    <div className="results-control">
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <Filter
        handleFilter={handleFilter}
        value={category}
        setFilterType={setFilterType}
        className="form-group"
      />
      <Sort onSubmit={handleSubmit} handleSort={handleSort} className="form-group" />
      <SideSortBtn onClick={toggleShow} />
    </div>
  );
};

export default SearchSortFilter;
