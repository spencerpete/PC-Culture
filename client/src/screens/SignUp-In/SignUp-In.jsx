import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './SignUp-In.css';
import { useParams } from 'react-router';

const SignUpIn = props => {
  const { params } = useParams();
  const { setUser } = props;
  const [userAction, setUserAction] = useState(params);
  // const [signUpClass, setSignUpClass] = useState('');
  // const [signInClass, setSignInClass] = useState('opacity-50');
  // const { params } = useParams();
  useEffect(() => {
    setUserAction(params);
  }, [params]);

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
      <div className="shadow-lg border rounded flex flex-col justify-center w-11/12 md:w-9/12 lg:w-6/12 m-auto bg-white">
        <div className="UserFormTitle">
          <div
            onClick={() => setUserAction('sign-up')}
            className={userAction === 'sign-up' ? '' : 'opacity-50'}
          >
            Sign Up
          </div>
          <div className="mx-2"> / </div>
          <div
            onClick={() => setUserAction('sign-in')}
            className={userAction === 'sign-in' ? '' : 'opacity-50'}
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
