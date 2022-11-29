import Logo from './Logo/Logo';
import Score from './Score/Score';
import Select from '../Select/Select';
import './header.css';

const Header = () => (
  <header className="header header__top">
    <Logo />
    <Select />
    <Score />
  </header>
);

export default Header;
