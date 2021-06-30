import { Link } from 'react-router-dom';

const ProductCard = props => {
  return (
    <div>
        <img src={props.product.imgURL} alt={props.product.name} />
        <div>{props.product.name}</div>
    </div>
  );
};
export default ProductCard;
