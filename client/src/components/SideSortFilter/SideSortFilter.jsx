import { Button, Filter, Sort } from '../index'
import { FaTimes } from 'react-icons/fa';
import './SideSortFilter.css'

const SideSortFilter = ({show, handleFilter, handleSort, handleSubmit, toggleShow}) => {
  return (
    <div className={show ? "sidesort show" : "sidesort"}>
      <FaTimes className="sort-close" onClick={toggleShow}/>
      <h2 className="menu-heading">Sort/Filter</h2>
      <Filter handleFilter={handleFilter}/>
      <Sort onSubmit={handleSubmit} handleSort={handleSort}/>
      <Button text="Apply" onClick={toggleShow}/>
    </div>
  )
}

export default SideSortFilter
