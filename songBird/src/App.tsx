import { Route, Routes } from 'react-router';
import Gallery from './components/Gallery/Gallery';
import GameField from './components/GameField/GameField';
import Result from './components/Result/Result';
import StartPage from './components/StartPage/StartPage';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/game" element={<GameField />} />
      <Route path="/result" element={<Result />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
};

export default App;
