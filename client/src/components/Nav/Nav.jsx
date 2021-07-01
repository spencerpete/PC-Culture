import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
export default function Nav() {
  const [clicked, setClicked] = useState(false);
  const handleMenu = () => {
    setClicked(prev => !prev);
  };
  return (
    <div className="nav">
      <nav>
        <FiMenu onClick={handleMenu} />
        {clicked ? <SideNav handleMenu={handleMenu} /> : ''}
        <Link to="/">PC-Culture</Link>
      </nav>
    </div>
  );
}
