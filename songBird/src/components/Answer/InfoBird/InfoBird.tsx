import { useAppSelector } from '../../../store/hooks';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './infoBird.css';

const InfoBird = () => {
  const userAnswer = useAppSelector((state) => state.app.userAnswer);
  const round = useAppSelector((state) => state.app.round);
  const birdsData = useAppSelector((state) => state.app.birds);
  const bird = birdsData[round].filter((item) => item.name === userAnswer)[0];

  return (
    <div className="bird">
      <div className="bird__top">
        <img className="bird__image" src={bird.image} alt={bird.name} />
        <div className="bird__info">
          <h4>{bird.name}</h4>
          <div>{bird.species}</div>
          <AudioPlayer
            autoPlay={false}
            src={bird.audio}
            showJumpControls={false}
            customAdditionalControls={[]}
            autoPlayAfterSrcChange={false}
            showFilledVolume={true}
          />
        </div>
      </div>

      <div className="bird__description">{bird.description}</div>
    </div>
  );
};

export default InfoBird;
