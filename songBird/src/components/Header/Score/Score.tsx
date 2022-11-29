import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../store/hooks';
import './score.css';

const Score = () => {
  const countScore = useAppSelector((state) => state.app.countScore);
  const { t } = useTranslation();
  return (
    <div className="header__score">
      {t('gameField.score')} <span className="score">{countScore}</span>
    </div>
  );
};

export default Score;
