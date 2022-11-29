import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <Link to="/">{t('navigation.home')}</Link>
      <Link to="/game">{t('navigation.game')}</Link>
      <Link to="/gallery">{t('navigation.gallery')}</Link>
      <Link to="/result">{t('navigation.result')}</Link>
    </nav>
  );
};

export default Navigation;
