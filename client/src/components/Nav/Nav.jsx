import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
import './Nav.css';
export default function Nav() {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(prev => !prev);
  };
  return (
    <div className="nav">
      <nav>
        <FiMenu onClick={toggleShow} />
        <SideNav toggleShow={toggleShow} show={show}/>
        <Link className="landing-link" to="/">
          PC Culture
        </Link>
      </nav>
    </div>
  );
}
