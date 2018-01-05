import { games, numberRandom } from '..';

const minDivisor = (num1, num2) => {
  let numberOne = num1;
  let numberTwo = num2;
  while (numberOne !== numberTwo) {
    if (numberOne > numberTwo) {
      numberOne -= numberTwo;
    } else {
      numberTwo -= numberOne;
    }
  }
  return numberOne;
};

const gameNod = () => {
  const description = 'Find the greatest common divisor of given numbers.\n';
  const getGame = () => {
    const randomNumber = [numberRandom(), numberRandom()];
    const question = `${randomNumber[0]} ${randomNumber[1]}`;
    const answer = minDivisor(randomNumber[0], randomNumber[1]);
    const arr = [question, answer];
    return arr;
  };
  games(description, getGame);
};

export default gameNod;
