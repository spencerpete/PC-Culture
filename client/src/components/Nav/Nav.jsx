import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
import './Nav.css';
export default function Nav() {
  const [clicked, setClicked] = useState(false);
  const handleMenu = () => {
    setClicked(prev => !prev);
  };
  return (
    <div className="nav">
      <nav>
        <FiMenu className="menu" onClick={handleMenu} />
        {clicked ? <SideNav /> : ''}
        <Link className="landing-link" to="/">
          PC-Culture
        </Link>
      </nav>
    </div>
  );
}
