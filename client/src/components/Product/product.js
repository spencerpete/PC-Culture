import { Link } from 'react-router-dom';

const Product = props => {
  return (
    <div className="p-10">
      <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-wrap content-center">
        <Link to={`/products/${props._id}`}>
          <div className="">
            <img className="" src={props.imgURL} alt={props.name} />
          </div>
          <div className="px-2 py-4 bg-blue-100">
            <div className="font-bold text-xl mb-2">{props.name}</div>
            <div>{`$${props.price}`}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Product;
