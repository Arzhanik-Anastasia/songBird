import './rounds.css';
import roundsRu from './../../data/rounds-ru.json';
import roundsEn from './../../data/rounds-en.json';
import { useAppSelector } from '../../store/hooks';

const Rounds = () => {
  const round = useAppSelector((state) => state.app.round);
  const language = useAppSelector((state) => state.app.language);

  const generateNameRounds = (language: string) => {
    const rounds = language === 'en' ? roundsEn : roundsRu;
    const roundsElem = rounds.map((elem) => {
      const classes = +elem.id === round ? 'birds_items active' : 'birds_items';

      return (
        <li className={classes} key={elem.id}>
          {elem.name}
        </li>
      );
    });
    return roundsElem;
  };

  return <ul className="round__block">{generateNameRounds(language)}</ul>;
};

export default Rounds;
