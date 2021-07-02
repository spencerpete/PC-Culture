import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signUp } from '../../services/users';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { SiMailDotRu } from 'react-icons/si';
import { Button } from '../index';
import './SignUp.css';

export default function SignUp(props) {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
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
  const onSignUp = async e => {
    e.preventDefault();
    const { setUser } = props;
    try {
      const user = await signUp(form);
      setUser(user);
      history.push('/');
    } catch (error) {
      console.error(error);
      setForm({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: true,
        errorMsg: '',
      });
    }
  };
  const renderError = () => {
    if (form.isError) {
      return <div>{form.errorMsg}</div>;
    } else {
      return <Button text={'Sign Up'} />;
    }
  };
  return (
    <div>
      <form className="flex flex-col justify-center" onSubmit={onSignUp}>
        <div className="input">
          <div className="icon">
            <SiMailDotRu />
          </div>
          <input
            className="input-tag"
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
            <FaUserAlt />
          </div>
          <input
            required
            type="text"
            name="username"
            value={form.username}
            autoComplete="username"
            placeholder="Username"
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
            autoComplete="new-password"
            placeholder="Password"
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
            name="passwordConfirmation"
            value={form.passwordConfirmation}
            autoComplete="new-password"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </div>
        {renderError()}
      </form>
    </div>
  );
}
