import { useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import i18n from '../../i18n';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeLanguage, resetGame } from '../../store/reducers/appReducer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './gallery.css';

const Gallery = () => {
  const birds = useAppSelector((state) => state.app.birds);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const langLocal = localStorage.getItem('lang-song');
    if (langLocal) {
      i18n.changeLanguage(langLocal);
      dispatch(changeLanguage(langLocal));
      dispatch(resetGame());
    }
  }, []);

  const list = birds.map((birdRound) => {
    const birds = birdRound.map((bird) => {
      return (
        <li key={bird.id} className="bird__item">
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
            />
            <div className="bird__description">{bird.description}</div>
          </div>
        </li>
      );
    });
    return birds;
  });
  return (
    <div className="container">
      <Header />
      <Navigation />
      <ul className="gallery">{list}</ul>
    </div>
  );
};

export default Gallery;
