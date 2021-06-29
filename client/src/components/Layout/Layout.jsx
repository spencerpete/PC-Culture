import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Layout = props => (
  <div>
    <Nav />
    <div>{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
