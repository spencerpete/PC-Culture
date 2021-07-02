import { useState, useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { verifyUser } from './services/users';
import ProductList from './screens/ProductList/ProductList';
import ProductCreate from './screens/ProductCreate/ProductCreate';
import ProductEdit from './screens/ProductEdit/ProductEdit';
import Home from './screens/Home/Home';
import SignUpIn from './screens/SignUp-In/SignUp-In';
import ProductDetail from './screens/ProductDetail/ProductDetail';
import SignOut from './screens/SignOut/SignOut';
import './App.css';

const App = () => {
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
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route exact path="/products">
          <ProductList user={user} />
        </Route>
        <Route exact path="/products/new">
          {user ? <ProductCreate user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/products/:id">
          <ProductDetail user={user} />
        </Route>
        <Route exact path="/products/:id/edit">
          {user ? <ProductEdit user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route path="/sign-up">
          <SignUpIn setUser={setUser} />
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
