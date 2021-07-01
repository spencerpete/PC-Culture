import { useState, useEffect } from 'react';
import { getProducts } from '../../services/products';
import { Layout, Product, Search, Filter, Sort } from '../../components';
import { AZ, ZA, lowestFirst, highestFirst } from '../../utils/Sort';

const ProductList = props => {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [applySort, setApplySort] = useState(false);
  const [sortType, setSortType] = useState('name-ascending');

  useEffect(() => {
    const fetchProducts = async () => {
      const listProducts = await getProducts();
      setProducts(listProducts);
      setSearchResult(listProducts);
    };
    fetchProducts();
  }, []);

  const handleSort = type => {
    if (type !== '' && type !== undefined) {
      setSortType(type);
    }
    switch (type) {
      case 'name-ascending':
        setSearchResult(AZ(searchResult));
        break;
      case 'name-descending':
        setSearchResult(ZA(searchResult));
        break;
      case 'price-ascending':
        setSearchResult(lowestFirst(searchResult));
        break;
      case 'price-descending':
        setSearchResult(highestFirst(searchResult));
        break;
      default:
        break;
    }
  };

  if (applySort) {
    handleSort(sortType);
    setApplySort(false);
  }

  function handleFilter(event) {
    const filteredResults = products.filter(product => product.category === event.target.value);
    setSearchResult(filteredResults);
  }

  const handleSubmit = event => event.preventDefault();

  const handleSearch = event => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResult(results);
    setApplySort(true);
  };

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <Filter handleFilter={handleFilter} />
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <div>
        <div>
          {searchResult.map((product, index) => {
            return (
              <Product
                _id={product._id}
                name={product.name}
                imgURL={product.imgURL}
                price={product.price}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
export default ProductList;
