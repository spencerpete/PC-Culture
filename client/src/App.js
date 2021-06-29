import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignUpIn from './screens/SignUp-In/SignUp-In';
import { verifyUser } from './services/users';
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
      <Route path="/SignUp">
        <SignUpIn setUser={setUser} />
      </Route>
    </div>
  );
};

export default App;
