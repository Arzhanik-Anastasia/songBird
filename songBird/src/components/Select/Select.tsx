import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeLanguage, resetGame } from '../../store/reducers/appReducer';
import './select.css';

const Select = () => {
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();
  const language = useAppSelector((state) => state.app.language);

  const toggleLang = (value: string) => {
    i18n.changeLanguage(value);
    dispatch(changeLanguage(value));
    localStorage.setItem('lang-song', value);
    dispatch(resetGame());
  };

  return (
    <select onChange={(e) => toggleLang(e.target.value)} value={language}>
      <option value="en">EN</option>
      <option value="ru">РУС</option>
    </select>
  );
};

export default Select;
