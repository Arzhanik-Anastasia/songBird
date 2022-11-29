import { useEffect } from 'react';
import i18n from '../../i18n';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeLanguage, resetGame } from '../../store/reducers/appReducer';
import Answer from '../Answer/Answer';
import Button from '../Button/Button';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Question from '../Question/Question';
import Result from '../Result/Result';
import Rounds from '../Rounds/Rounds';
import Variables from '../Variables/Variables';

const GameField = () => {
  const isFinished = useAppSelector((state) => state.app.isFinished);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const langLocal = localStorage.getItem('lang-song');
    if (langLocal) {
      i18n.changeLanguage(langLocal);
      dispatch(changeLanguage(langLocal));
      dispatch(resetGame());
    }
  }, []);

  return (
    <div className="container">
      {isFinished ? (
        <Result />
      ) : (
        <>
          <Header />
          <Navigation />
          <Rounds />
          <Question />
          <div className="center__block">
            <Variables />
            <Answer />
          </div>
          <Button />
        </>
      )}
    </div>
  );
};

export default GameField;
