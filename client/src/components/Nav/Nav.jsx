import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav({ user, toggleShow }) {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <ul className="navbar-nav">
          <FiMenu onClick={toggleShow} className="navbar-dropdown" />
          <Link to="/products/all" className="nav-link">
            All Parts
          </Link>
          {user ? (
            <Link to="/products/new" className="nav-link">
              Add Part
            </Link>
          ) : (
            ''
          )}
        </ul>
        <div className="brand-container">
          <Link className="brand" to="/">
            PC Culture
          </Link>
        </div>
        <ul className="navbar-auth">
          {user ? (
            <Link to="/sign-out" className="nav-link">
              Sign Out
            </Link>
          ) : (
            <>
              <Link to="/sign-up" className="nav-link">
                Sign Up
              </Link>
              <Link to="/sign-in" className="nav-link">
                Sign In
              </Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
