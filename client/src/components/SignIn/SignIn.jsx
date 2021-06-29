import React, { useState } from 'react';
import './SignIn.css';
import { signIn } from '../../services/users';

const SignIn = props => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    isError: false,
    errorMsg: '',
  });

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
      return <button>Sign In</button>;
    }
  };
  return (
    <div>
      <form onSubmit={onSignIn}>
        <input
          required
          type="text"
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          name="password"
          value={form.password}
          placeholder="Password"
          onChange={handleChange}
        />
        {renderError()}
      </form>
    </div>
  );
};

export default SignIn;
