const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

export default getRandomInt;

export const getTimeCodeFromNum = (num: string) => {
  let seconds = parseInt(num);
  let minutes = parseInt((seconds / 60).toString());
  seconds -= minutes * 60;
  const hours = parseInt((minutes / 60).toString());
  minutes -= hours * 60;
  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, '0')}`;
  return `${String(hours).padStart(2, '0')}:${minutes}:${String(seconds % 60).padStart(2, '0')}`;
};
