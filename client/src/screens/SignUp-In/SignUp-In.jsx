import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SignUpIn = props => {
  const { setUser } = props;
  const [userAction, setUserAction] = useState('sign-up');

  const SignInForm = () => {
    return (
      <div>
        <SignIn setUser={setUser} />
      </div>
    );
  };
  const SignUpForm = () => {
    return (
      <div>
        <SignUp setUser={setUser} />
      </div>
    );
  };
  return (
    <>
      <div className="sign-up/in-page">
        <div className="UserFormTitle">
          <div onClick={() => setUserAction('sign-up')}>Sign Up</div>
          <div>/</div>
          <div onClick={() => setUserAction('sign-in')}>Sign In</div>
        </div>
        {userAction === 'sign-in' ? SignInForm() : SignUpForm()}
      </div>
    </>
  );
};
export default SignUpIn;
