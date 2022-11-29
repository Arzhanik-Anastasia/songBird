// блокировка кнопки, если роунд не закончен
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeIsFinished, nextRound } from '../../store/reducers/appReducer';
import './button.css';
const Button = () => {
  const isCorrect = useAppSelector((state) => state.app.isCorrect);
  const navigate = useNavigate();
  const round = useAppSelector((state) => state.app.round);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const maxRound = 5;

  const setNextRound = () => {
    if (round >= maxRound) {
      dispatch(changeIsFinished());
      navigate('/result');
    } else {
      dispatch(nextRound(round + 1));
    }
  };

  return (
    <button className="btn-next" disabled={!isCorrect} onClick={setNextRound}>
      {t('gameField.button')}
    </button>
  );
};

export default Button;
