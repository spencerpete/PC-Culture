import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignIn.css';
import { signIn } from '../../services/users';
import { FaLock } from 'react-icons/fa';
import { SiMailDotRu } from 'react-icons/si';
import { Button } from '../index';
const SignIn = props => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    isError: false,
    errorMsg: '',
  });

  const history = useHistory();

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSignIn = async e => {
    e.preventDefault();
    const { setUser } = props;
    try {
      const user = await signIn(form);
      setUser(user);
      history.goBack();
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        email: '',
        password: '',
      });
    }
  };

  const renderError = () => {
    if (form.isError) {
      return <div>{form.errorMsg}</div>;
    } else {
      return <Button text={'Sign In'} />;
    }
  };
  return (
    <div>
      <form className="form" onSubmit={onSignIn}>
        <div className="input">
          <div className="icon">
            <SiMailDotRu />
          </div>
          <input
            required
            type="text"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <div className="icon">
            <FaLock />
          </div>
          <input
            required
            type="password"
            name="password"
            value={form.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        {renderError()}
      </form>
    </div>
  );
};

export default SignIn;
