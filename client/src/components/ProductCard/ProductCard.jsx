import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const ProductCard = ({ product, user }) => {

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="detailImg mx-auto bg-white rounded-3xl shadow-lg m-3 mb-8 h-80 overflow-hidden w-10/12 md:w-8/12 lg:w-6/12">
        <img
          className="object-center rounded-3xl object-contain h-full w-full overflow-hidden"
          src={product.imgURL}
          alt={product.name}
        />
      </div>
      <div className="w-10/12 md:w-8/12 lg:w-6/12 rounded-3xl shadow-lg m-3 bg-white mt-11">
        <div className="detailName m-3 text-2xl font-semibold p-3 pt-10 text-center">
          {product.name}
        </div>
        <div className="detailPrice m-3 font-medium p-2 text-center">{product.price}</div>
        <div className="detailDescription m-3 p-1 pb-1 text-left">{product.description}</div>
        <div className="text-center flex justify-evenly">
          {user?.id === product.userId && (
            <Link to={`/products/${product._id}/edit`}>
              <Button text="Edit" />
            </Link>
          )}

          <a href={product.link}>
            <Button text="Buy Here" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
