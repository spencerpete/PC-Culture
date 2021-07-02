import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Nav.css';
export default function Nav({ toggleShow }) {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <ul className="navbar-nav">
          <FiMenu onClick={toggleShow} className="navbar-dropdown"/>
          <Link to="/products" className="nav-link">All Parts</Link>
        </ul>
        <div className="brand-container">
          <Link className="brand" to="/">
            PC Culture
          </Link>
        </div>
        <ul className="navbar-auth">
          <Link to="/sign-up" className="nav-link">Sign Up</Link>
          <Link to="/sign-up" className="nav-link">Sign In</Link>
        </ul>
      </div>
    </div>
  );
}
