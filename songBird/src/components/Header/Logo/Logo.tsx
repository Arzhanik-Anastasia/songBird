import { Link } from 'react-router-dom';
import './logo.css';

const Logo = () => {
  return (
    <Link className="title" to="/">
      <span>S</span>ong<span>B</span>ird
    </Link>
  );
};

export default Logo;
