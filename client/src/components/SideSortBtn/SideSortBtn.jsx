import { VscSettings } from 'react-icons/vsc'
import './SideSortBtn.css'

const SideSortBtn = ({onClick}) => {
  return (
    <button onClick={onClick}className="sidesort-btn"><VscSettings className="sort-icon"/></button>
  )
}

export default SideSortBtn
