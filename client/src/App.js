import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { verifyUser } from './services/users';
import ProductList from './screens/ProductList/ProductList';
import Home from './screens/Home/Home';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);
  return (
    <div className="App">
      <Route exact path="/">
        <Home user={user} />
      </Route>
      <Route exact path="/products">
        <ProductList user={user} />
      </Route>
    </div>
  );
}

export default App;
