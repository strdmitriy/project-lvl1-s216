import { games, numberRandom } from '..';

const arithmeticProgression = (start, step, hidden, progressionLength) => {
  let startNumber = start;
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hidden) {
      progression.push('..');
      startNumber += step;
    }
    progression.push(startNumber);
    startNumber += step;
  }
  return progression.join(' ');
};

const gameProgression = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const getGame = () => {
    const startNumber = numberRandom();
    const step = numberRandom();
    const hiddenNumber = numberRandom();
    const progressionLength = 12;
    const question = arithmeticProgression(startNumber, step, hiddenNumber, progressionLength);
    const answer = startNumber + (step * hiddenNumber);
    const gameDateArr = [question, answer];
    return gameDateArr;
  };
  games(description, getGame);
};

export default gameProgression;
