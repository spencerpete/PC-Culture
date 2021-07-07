import { Button, Filter, Sort } from '../index';
import { FaTimes } from 'react-icons/fa';
import './SideSortFilter.css';

const SideSortFilter = ({
  show,
  category,
  handleFilter,
  setFilterType,
  handleSort,
  handleSubmit,
  toggleShow,
}) => {
  return (
    <div className={show ? 'sidesort show' : 'sidesort'}>
      <FaTimes className="sort-close" onClick={toggleShow} />
      <h2 className="menu-heading">Sort/Filter</h2>
      <div className="control-container">
        <Filter
          handleFilter={handleFilter}
          value={category}
          setFilterType={setFilterType}
          className="sidesort-form-group"
        />
        <Sort
          onSubmit={handleSubmit}
          handleSort={handleSort}
          id="side-sort"
          className="sidesort-form-group"
        />
      </div>
      <Button text="Apply" onClick={toggleShow} />
    </div>
  );
};

export default SideSortFilter;
