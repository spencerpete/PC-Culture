import { Link, useParams } from 'react-router-dom';
import Button from '../Button/Button'


const ProductCard = props => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="detailImg mx-auto bg-white rounded-3xl shadow-lg m-3 mb-8 h-80 overflow-hidden w-10/12 md:w-8/12 lg:w-6/12">
        <img className="object-center rounded-3xl object-contain h-full w-full overflow-hidden" src={props.product.imgURL} alt={props.product.name} />
      </div>
      <div className="w-10/12 md:w-8/12 lg:w-6/12 rounded-3xl shadow-lg m-3 bg-white mt-11">
        <div className="detailName m-3 text-2xl font-semibold p-3 pt-10 text-center">{props.product.name}</div>
        <div className="detailPrice m-3 font-medium p-2 text-center">{props.product.price}</div>
        <div className="detailDescription m-3 p-1 pb-1 text-left">{props.product.description}</div>
        <div className="text-center flex justify-evenly">
          <Link to={`/products/${props.product._id}/edit`}>
            <Button text="Edit" />
          </Link>
          <a href={props.product.link}>
            <Button text="Buy Here" />
          </a>
          
        </div>
      </div>
    </div>
  );
};
export default ProductCard;


