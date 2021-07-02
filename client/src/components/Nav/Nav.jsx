import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Nav.css';
export default function Nav({toggleShow}) {

  return (
    <div className="nav">
      <nav>
        <FiMenu onClick={toggleShow} />        
        <Link className="landing-link" to="/">
          PC Culture
        </Link>
      </nav>
    </div>
  );
}
