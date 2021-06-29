import { Link } from 'react-router-dom';

const ProductCard = props => {
  return (
    <div>
      <Link to={`/products/${props._id}`}>
        <img src={props.imgURL} alt={props.name} />
        <div>{props.name}</div>
      </Link>
    </div>
  );
};
export default ProductCard;
