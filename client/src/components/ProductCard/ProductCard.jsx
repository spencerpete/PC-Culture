import { useHistory } from 'react-router-dom';
import Button from '../Button/Button';

const ProductCard = ({ product, user }) => {
  const history = useHistory();

  return (
    <div>
      <div className="detailImg bg-white rounded-3xl shadow-lg m-3 mb-8 h-80 overflow-hidden">
        <img
          className="object-center rounded-3xl object-contain h-96 w-full overflow-hidden"
          src={product.imgURL}
          alt={product.name}
        />
      </div>
      <div className="rounded-3xl shadow-lg m-3 text-center bg-white mt-11">
        <div className="detailName m-3 text-2xl font-semibold p-3 pt-10">{product.name}</div>
        <div className="detailPrice m-3 font-medium p-2">{product.price}</div>
        <div className="detailDescription m-3 p-1 pb-4">{product.description}</div>
        {user.id === product.userId && (
          <Button text="Edit" onClick={() => history.push(`/products/${product._id}/edit`)} />
        )}
      </div>
    </div>
  );
};
export default ProductCard;
