import { useState } from 'react';
import { Nav, Footer, SideNav } from '../index';
import './Layout.css';

const Layout = props => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(prev => !prev);
  };
  return (
    <div className="layout">
      <SideNav toggleShow={toggleShow} show={show} />
      <Nav toggleShow={toggleShow} />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
