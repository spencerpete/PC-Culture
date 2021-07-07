import { useState, useEffect } from 'react';
import { getProducts } from '../../services/products';
import { Layout, Product, SearchSortFilter, SideSortFilter } from '../../components';
import { AZ, ZA, lowestFirst, highestFirst } from '../../utils/sort';
import { useParams } from 'react-router-dom';

const ProductList = props => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [applySort, setApplySort] = useState(false);
  const [sortType, setSortType] = useState('name-ascending');
  const [filterType, setFilterType] = useState(category);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const listProducts = await getProducts();
      setProducts(listProducts);
      if (category !== 'all') {
        setSearchResult(listProducts.filter(product => product.category.includes(category)))
      } else {
        setSearchResult(listProducts);
        setFilterType(category)
      }
    };
    fetchProducts();
  }, [category]);

  // Control side sort/filter menu
  const toggleShow = () => {
    setShow(prev => !prev);
  };

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

  function handleFilter(filterType) {
    if (filterType === 'all') {
      const filteredResults = products.filter(product => product.category.includes(''));
      setSearchResult(filteredResults);
    } else {
      const filteredResults = products.filter(product => product.category.includes(filterType));
      setSearchResult(filteredResults);
    }
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
    <>
      <SideSortFilter
        handleSort={handleSort}
        handleSubmit={handleSubmit}
        handleFilter={handleFilter}
        setFilterType={setFilterType}
        category={filterType}
        show={show}
        toggleShow={toggleShow}
      />
      <Layout user={props.user}>
        <SearchSortFilter
          handleSubmit={handleSubmit}
          handleSearch={handleSearch}
          handleSort={handleSort}
          handleFilter={handleFilter}
          setFilterType={setFilterType}
          category={filterType}
          toggleShow={toggleShow}
        />
        <div className="mt-5 grid grid-cols-2 md:grid md:grid-cols-3 lg:grid-cols-4">
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
      </Layout>
    </>
  );
};
export default ProductList;
