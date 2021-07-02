import './CategoryCard.css';
import { Link } from 'react-router-dom';
const CategoryCard = () => {
  const categories = [
    {
      imgURL: 'https://c1.neweggimages.com/ProductImage/19-113-569-V01.jpg',
      name: 'CPUs',
    },
    {
      imgURL: 'https://c1.neweggimages.com/ProductImage/20-231-941-03.jpg',
      name: 'RAMs',
    },
    {
      imgURL:
        'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/629457_186510_01_front_zoom.jpg',
      name: 'Motherboards',
    },
    {
      imgURL:
        'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/628346_173013_01_front_zoom.jpg',
      name: 'GPUs',
    },
    {
      imgURL:
        'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/633661_232421_01_front_zoom.jpg',
      name: 'Storage',
    },
    {
      imgURL:
        'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/638084_281121_01_front_zoom.jpg',
      name: 'Cases',
    },
    {
      imgURL:
        'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/624907_128025_01_front_zoom.jpg',
      name: 'Power Supplies',
    },
  ];
  return (
    <div className="category-cards-container">
      {categories.map((category, index) => {
        return (
          <Link to="/products" className="categoryCard-shell shadow-lg">
            <div className="categoryCard-img-shell">
              <img src={category.imgURL} alt={category.name} />
            </div>
            <div className="categoryCard-info-shell">
              <div className="categoryCard-info-body">{category.name}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryCard;
