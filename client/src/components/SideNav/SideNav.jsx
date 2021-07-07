import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import './SideNav.css';

const SideNav = ({ user, show, toggleShow }) => {
  return (
    <div className={show ? 'sidenav-container show' : 'sidenav-container'}>
      <div className={show ? 'sidenav show' : 'sidenav'}>
        <div className=" sidenav-header">
          <FaTimes className="close" onClick={toggleShow} />
          <h2 className="sidenav-brand">PC Culture</h2>
        </div>
        <div className="sidenav-links">
          <Link className="sidenav-link" to="/products/all" onClick={toggleShow}>
            All Parts
          </Link>
          <Link className="sidenav-link" to="/products/new">
            Create Part
          </Link>
          {user ? (
            <Link className="sidenav-link" to="/sign-out">
              Sign Out
            </Link>
          ) : (
            <>
              <Link className="sidenav-link" to="/sign-in">
                Sign In
              </Link>
              <Link className="sidenav-link" to="/sign-up">
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
