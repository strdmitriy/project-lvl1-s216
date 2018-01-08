import { games, numberRandom } from '..';

const numberProgression = (start, step, n) => {
  if (n > 1) {
    return start + (step * (n - 1));
  }
  return start;
};

const generateProgression = (start, step, hidden, n) => {
  let progression = '';
  for (let i = 1; i <= n; i += 1) {
    if (i === hidden) {
      progression += '.. ';
    } else {
      progression += `${numberProgression(start, step, i)} `;
    }
  }
  return progression;
};


const gameProgression = () => {
  const description = 'What number is missing in this progression?';
  const getGame = () => {
    const start = numberRandom();
    const step = numberRandom();
    const hidden = numberRandom();
    const progressionLength = 10;
    const question = generateProgression(start, step, hidden, progressionLength);
    const answer = numberProgression(start, step, hidden);
    const gameDateArr = [question, answer];
    return gameDateArr;
  };
  games(description, getGame);
};

export default gameProgression;
