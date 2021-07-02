import { Link, useParams } from 'react-router-dom';
import Button from '../Button/Button'


const ProductCard = props => {
  return (
    <div>
      <div className="detailImg bg-white rounded-3xl shadow-lg m-3 mb-8 h-80 overflow-hidden">
        <img className="object-center rounded-3xl object-contain h-96 w-full overflow-hidden" src={props.product.imgURL} alt={props.product.name} />
      </div>
      <div className="rounded-3xl shadow-lg m-3 text-center bg-white mt-11">
        <div className="detailName m-3 text-2xl font-semibold p-3 pt-10">{props.product.name}</div>
        <div className="detailPrice m-3 font-medium p-2">{props.product.price}</div>
        <div className="detailDescription m-3 p-1 pb-10">{props.product.description}</div>
      </div>
        <div className="m-6 text-center pb-6">
          <Link to={`/products/${props.product._id}/edit`}>
            <Button text="Edit" />
          </Link>
        </div>
    </div>
  );
};
export default ProductCard;


