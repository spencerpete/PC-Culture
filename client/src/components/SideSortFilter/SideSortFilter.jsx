import { Filter, Sort } from '../index'
import { FaTimes } from 'react-icons/fa';
import './SideSortFilter.css'

const SideSortFilter = () => {
  return (
    <div className="sidesort">
      <FaTimes className="sort-close"/>
      <h2 className="menu-heading">Sort/Filter</h2>
      <Filter />
      <Sort />
    </div>
  )
}

export default SideSortFilter
