import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import './SideNav.css';

const SideNav = ({ user, show, toggleShow }) => {
  return (
    <div className={show ? 'sidenav-container show' : 'sidenav-container'}>
      <div className={show ? 'sidenav show' : 'sidenav'}>
        <div className=" sidenav-header">
          <FaTimes className="close" onClick={toggleShow} />
          <Link className="sidenav-brand" to="/" onClick={toggleShow}>
            PC Culture
          </Link>
        </div>
        <div className="sidenav-links">
          <Link className="sidenav-link" to="/products/all" onClick={toggleShow}>
            All Parts
          </Link>
          <Link className="sidenav-link" to="/products/new" onClick={toggleShow}>
            Add Part
          </Link>
          {user ? (
            <Link className="sidenav-link" to="/sign-out" onClick={toggleShow}>
              Sign Out
            </Link>
          ) : (
            <>
              <Link className="sidenav-link" to="/sign-in" onClick={toggleShow}>
                Sign In
              </Link>
              <Link className="sidenav-link" to="/sign-up" onClick={toggleShow}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
