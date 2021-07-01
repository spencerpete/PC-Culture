import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import './SideNav.css'

const SideNav = ({ user, handleMenu }) => {
  return (
    <div className="sidenav-container bg-black bg-opacity-50 fixed w-full h-full">
      <div className="side-nav flex flex-col w-2/4 fixed h-full bg-white">
        <div className=" sidenav-header flex items-center justify-center h-12 bg-black text-white text-center mb-10">
          <FaTimes className="absolute left-1 top-1" onClick={handleMenu}/>
          <h2 className="sidenav-brand text-2xl font-semibold">PC Culture</h2>
        </div>
        <div className="sidenav-links flex flex-col items-center">
          <Link className="sidenav-link" to="/products">All Parts</Link>
          <Link className="sidenav-link" to="/products/new">Create Part</Link>
          {user ? (
            <Link className="sidenav-link" to="/sign-out">Sign Out</Link>
          ) : (
            <>
              <Link className="sidenav-link" to="/sign-up">Sign In</Link>
              <Link className="sidenav-link" to="/sign-up">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
