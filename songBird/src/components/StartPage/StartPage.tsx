import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Logo from '../Header/Logo/Logo';
import Select from '../Select/Select';
import { useTranslation } from 'react-i18next';
import './start.css';
import { useAppDispatch } from '../../store/hooks';
import { changeLanguage, resetGame } from '../../store/reducers/appReducer';
import { useEffect } from 'react';
import i18n from '../../i18n';

const StartPage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const initGame = () => {
    dispatch(resetGame());
  };

  useEffect(() => {
    const langLocal = localStorage.getItem('lang-song');
    if (langLocal) {
      i18n.changeLanguage(langLocal);
      dispatch(changeLanguage(langLocal));
      dispatch(resetGame());
    }
  }, []);

  return (
    <>
      <div className="start__header container">
        <Logo />
        <Select />
      </div>
      <div className="start__page">
        <div className="start__block">
          <h1>{t('startPage.quiz')}</h1>
          <div className="start__page-desc">{t('startPage.description')}</div>
          <Link className="start__button button" to="/game" onClick={initGame}>
            {t('startPage.button')}
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StartPage;
