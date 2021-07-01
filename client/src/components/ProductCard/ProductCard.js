import { Link } from 'react-router-dom';

const ProductCard = props => {
  return (
    <div>
      <div className="detailImg">
        <img src={props.product.imgURL} alt={props.product.name} />
      </div>
      <div className="detailName">{props.product.name}</div>
      <div className="detailPrice">{props.product.price}</div>
      <div className="detailDescription">{props.product.description}</div>
    </div>
  );
};
export default ProductCard;
