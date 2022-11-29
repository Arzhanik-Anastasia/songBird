import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import i18n from '../../i18n';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeLanguage, resetGame } from '../../store/reducers/appReducer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Rounds from '../Rounds/Rounds';
import './result.css';

const Result = () => {
  const score = useAppSelector((state) => state.app.countScore);
  const maxScore = 30;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const initGame = () => {
    dispatch(resetGame());
  };

  useEffect(() => {
    const langLocal = localStorage.getItem('lang-song');
    if (langLocal) {
      i18n.changeLanguage(langLocal);
      dispatch(changeLanguage(langLocal));
    }
  }, []);

  return (
    <div className="container">
      <Header />
      <Navigation />
      <Rounds />
      <div className="result__block">
        <h4 className="result__title">{t('results.congr')}</h4>
        {score === maxScore ? (
          <div>{t('results.max')}</div>
        ) : (
          <div>
            {t('results.res')}
            {score}
            {t('results.out')}
          </div>
        )}
        <Link to="/">
          <button className="button result__button" onClick={initGame}>
            {t('gameField.newGame')}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
