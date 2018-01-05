import { games, numberRandom } from '..';

const minDivisor = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return minDivisor(num2, num1 % num2);
};

const gameGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const getGame = () => {
    const randomNumber = [numberRandom(), numberRandom()];
    const question = `${randomNumber[0]} ${randomNumber[1]}`;
    const answer = minDivisor(randomNumber[0], randomNumber[1]);
    const gameDateArr = [question, answer];
    return gameDateArr;
  };
  games(description, getGame);
};

export default gameGcd;
