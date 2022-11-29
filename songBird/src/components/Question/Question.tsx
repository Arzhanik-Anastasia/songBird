import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setCorrectAnswer, setRandomBird } from '../../store/reducers/appReducer';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './question.css';

const Question = () => {
  const round = useAppSelector((state) => state.app.round);
  const isCorrect = useAppSelector((state) => state.app.isCorrect);
  const correctAnswer = useAppSelector((state) => state.app.correctAnswer);
  const dispatch = useAppDispatch();
  const birdsData = useAppSelector((state) => state.app.birds);
  const randomBird = useAppSelector((state) => state.app.randomBird);
  const lang = useAppSelector((state) => state.app.language);

  useEffect(() => {
    dispatch(setCorrectAnswer(randomBird.name));
  }, [randomBird]);

  useEffect(() => {
    dispatch(setRandomBird());
    dispatch(setCorrectAnswer(randomBird.name));
  }, [round, lang]);

  const imageUrl = isCorrect
    ? birdsData[round].filter((el) => el.name === correctAnswer)[0].image
    : './../../../assets/image/silhouette.jpg';

  return (
    <div className="random__bird">
      <div className="random__bird-img" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="random__bird-info">
        <h3 className="random__bird-title">{isCorrect ? correctAnswer : '******'}</h3>
        <div className="random__bird-audio">
          <AudioPlayer
            autoPlay={false}
            src={randomBird.audio}
            showJumpControls={false}
            customAdditionalControls={[]}
            showFilledVolume={true}
            autoPlayAfterSrcChange={false}
            layout="horizontal"
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
