import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signUp } from '../../services/users';

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
      history.goBack();
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
      return <button>Sign Up</button>;
    }
  };
  return (
    <div>
      <form onSubmit={onSignUp}>
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
          type="text"
          name="username"
          value={form.username}
          autoComplete="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          name="password"
          value={form.password}
          autoComplete="new-password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          name="passwordConfirmation"
          value={form.passwordConfirmation}
          autoComplete="new-password"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        {renderError()}
      </form>
    </div>
  );
}
