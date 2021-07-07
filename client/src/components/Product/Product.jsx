import { Link } from 'react-router-dom';

const Product = props => {
  return (
    <div className="p-3">
      <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-wrap content-center hover:text-gray-50 hover:shadow-inner hover:underline">
        <Link to={`/product/${props._id}`}>
          <div className="">
            <img className="" src={props.imgURL} alt={props.name} />
          </div>
          <div className="px-2 py-4 bg-blue-100">
            <div className="font-bold mb-1">{props.name}</div>
            <div>{`$${props.price}`}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Product;
