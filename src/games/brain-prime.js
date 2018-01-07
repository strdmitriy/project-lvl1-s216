import { games, numberRandom } from '..';

const isPrime = (num) => {
  if (num <= 0 || num === 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gamePrime = () => {
  const description = 'Is this number prime?';
  const getGame = () => {
    const num = numberRandom();
    const answer = (number) => {
      if (isPrime(number)) {
        return 'yes';
      } return 'no';
    };
    const question = `${num}`;
    const gameDateArr = [question, answer(num)];
    return gameDateArr;
  };
  games(description, getGame);
};

export default gamePrime;
