import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './SignUp-In.css';

const SignUpIn = props => {
  const { setUser } = props;
  const [userAction, setUserAction] = useState('sign-up');
  const [signUpClass, setSignUpClass] = useState('');
  const [signInClass, setSignInClass] = useState('opacity-50');

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
    <Layout user={props.user}>
      <div className=".shadow border rounded flex flex-col justify-center w-11/12 md:w-9/12 lg:w-6/12 m-auto">

        <div className="UserFormTitle">
          <div
            onClick={() => (
              setUserAction('sign-up'), setSignInClass('opacity-50'), setSignUpClass('')
            )}
            className={signUpClass}
          >
            Sign Up
          </div>
          <div>/</div>
          <div
            onClick={() => (
              setUserAction('sign-in'), setSignUpClass('opacity-50'), setSignInClass('')
            )}
            className={signInClass}
          >
            Sign In
          </div>
        </div>
        {userAction === 'sign-in' ? SignInForm() : SignUpForm()}
      </div>
    </Layout>
  );
};
export default SignUpIn;
