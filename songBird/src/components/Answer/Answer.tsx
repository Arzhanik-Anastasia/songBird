import { useAppSelector } from '../../store/hooks';
import InfoBird from './InfoBird/InfoBird';
import { useTranslation } from 'react-i18next';
import './answer.css';

const Answer = () => {
  const isAnswered = useAppSelector((state) => state.app.isAnswered);
  const { t } = useTranslation();
  return isAnswered ? <InfoBird /> : <div className="answer__block">{t('gameField.player')}</div>;
};

export default Answer;
