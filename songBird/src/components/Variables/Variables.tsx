import { useAppDispatch, useAppSelector } from '../../store/hooks';

import {
  changeCountRound,
  changeCountScore,
  setAnswered,
  setIsCorrect,
  setUserAnswer,
  updateBirds,
} from '../../store/reducers/appReducer';
import './variables.css';

const Variables = () => {
  const round = useAppSelector((state) => state.app.round);
  const correctAnswer = useAppSelector((state) => state.app.correctAnswer);
  const isCorrect = useAppSelector((state) => state.app.isCorrect);
  const variablesItem = useAppSelector((state) => state.app.birds[round]);
  const countRound = useAppSelector((state) => state.app.countRound);
  const countScore = useAppSelector((state) => state.app.countScore);
  const dispatch = useAppDispatch();

  const checkedAnswer = (birdName: string) => {
    storeHandler(birdName);
    dispatch(setAnswered());
    dispatch(setUserAnswer(birdName));
    playSound(birdName);
  };

  const playSound = (birdName: string) => {
    if (isCorrect) return;
    const correct = './assets/sounds/correct.mp3';
    const wrong = './assets/sounds/wrong.mp3';
    const audioWay = birdName === correctAnswer ? correct : wrong;
    const audio = new Audio(audioWay);
    audio.play();
  };

  const storeHandler = (birdName: string) => {
    if (!isCorrect) {
      if (birdName === correctAnswer) {
        dispatch(changeCountScore(countScore + countRound));
        dispatch(setIsCorrect(true));
      } else {
        dispatch(changeCountRound(countRound - 1));
      }
      dispatch(updateBirds(birdName));
    }
  };

  const variablesList = variablesItem.map((item) => {
    let classes = 'li-icon';
    if (item.isAnswered) {
      const addedClass = item.name === correctAnswer ? ' right' : ' wrong';
      classes += addedClass;
    }

    return (
      <li className="variable__birds-items" onClick={() => checkedAnswer(item.name)} key={item.id}>
        <span className={classes}></span>
        {item.name}
      </li>
    );
  });

  return <ul className="variable__birds">{variablesList} </ul>;
};

export default Variables;
