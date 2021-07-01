import { Select } from '../index'   

const Filter = ({handleFilter}) => {
  return (
    <>
      <Select onChange={handleFilter}/>
    </>
  )
}

export default Filter
