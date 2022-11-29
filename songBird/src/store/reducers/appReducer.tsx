import { createSlice } from '@reduxjs/toolkit';
import birdsDataRu from '../../data/birdsDataRu';
import birdsDataEn from '../../data/birdsDataEn';

const initialState = {
  language: 'en',
  round: 0,
  isCorrect: false,
  correctAnswer: '',
  birds: birdsDataEn,
  variablesRound: [],
  isAnswered: false,
  userAnswer: '',
  countRound: 5,
  countScore: 0,
  isFinished: false,
  randomBird: birdsDataEn[0][Math.floor(Math.random() * birdsDataEn[0].length)],
};

export const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeLanguage(state, action) {
      state.language = action.payload;
    },
    setBirds(state) {
      state.birds = state.language === 'en' ? birdsDataEn : birdsDataRu;
    },
    setRandomBird(state) {
      state.randomBird =
        state.birds[state.round][Math.floor(Math.random() * state.birds[state.round].length)];
    },
    nextRound(state, action) {
      state.isCorrect = false;
      state.isAnswered = false;
      state.round = action.payload;
      state.countRound = 5;
    },
    setAnswered(state) {
      state.isAnswered = true;
    },
    setUserAnswer(state, action) {
      state.userAnswer = action.payload;
    },
    setIsCorrect(state, action) {
      state.isCorrect = action.payload;
    },
    setCorrectAnswer(state, action) {
      state.correctAnswer = action.payload;
    },
    changeCountScore(state, action) {
      state.countScore = action.payload;
    },
    changeCountRound(state, action) {
      state.countRound = action.payload;
    },
    updateBirds(state, action) {
      state.birds[state.round].forEach((item) => {
        if (item.name === action.payload) {
          item.isAnswered = true;
        }
      });
    },
    changeIsFinished(state) {
      state.isFinished = !state.isFinished;
    },
    resetGame(state) {
      state.round = 0;
      state.birds = state.language === 'en' ? birdsDataEn : birdsDataRu;
      state.countRound = 5;
      state.countScore = 0;
      state.isFinished = false;
      state.isCorrect = false;
      state.correctAnswer = '';
      state.variablesRound = [];
      state.isAnswered = false;
      state.userAnswer = '';
    },
  },
});

export default appReducer.reducer;
export const {
  changeLanguage,
  setBirds,
  setCorrectAnswer,
  setRandomBird,
  updateBirds,
  setIsCorrect,
  setAnswered,
  setUserAnswer,
  nextRound,
  changeCountScore,
  changeCountRound,
  changeIsFinished,
  resetGame,
} = appReducer.actions;
