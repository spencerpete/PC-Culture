import { Select } from '../index';
import './Filter.css'

const Filter = ({ handleFilter, className }) => {
  return (
    <div className={className}>
      <label className="form-label" htmlFor="select">Filter:</label>
      <Select onChange={handleFilter} className="select"/>
    </div>
  );
};

export default Filter;
