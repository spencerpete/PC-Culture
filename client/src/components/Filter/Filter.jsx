import { Select } from '../index';
import './Filter.css'

const Filter = ({ handleFilter }) => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor="select">Filter:</label>
      <Select onChange={handleFilter} />
    </div>
  );
};

export default Filter;
