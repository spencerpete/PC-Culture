import { Link } from 'react-router-dom';

const SideNav = ({ user, toggleShow }) => {
  return (
    <div className="sidenav-container">
      <div className="side-nav">
        <div className="sidenav-header">
          {/* icon */}
          <h2 className="sidenav-brand">PC Culture</h2>
        </div>
        <Link path="/products">All Parts</Link>
        <Link path="/products/new">All Parts</Link>
        {user ? (
          <Link path="/sign-out">Sign Out</Link>
        ) : (
          <>
            <Link path="/sign-in">All Parts</Link>
            <Link path="/sign-up">All Parts</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default SideNav;
