import { Switch, Route, Redirect } from 'react-router-dom'
import ProductCreate from './screens/ProductCreate/ProductCreate'
import ProductEdit from './screens/ProductEdit/ProductEdit'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/products/new">
          <ProductCreate />
        </Route>
        <Route exact path="/products/:id/edit">
          <ProductEdit />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
