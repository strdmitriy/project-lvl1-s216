import { games, numberRandom } from '..';

const operantRandom = () => {
  const operantArr = ['+', '-', '*'];
  const randomOperant = operantArr[Math.floor(Math.random() * (3 - 0)) - 0];
  return randomOperant;
};

const mathematicalOperation = (number, operant) => {
  if (operant === '+') {
    return number[0] + number[1];
  } else if (operant === '-') {
    return number[0] - number[1];
  }
  return number[0] * number[1];
};

const gameCalc = () => {
  const description = 'What is the result of the expression?\n';
  const getGame = () => {
    const randomNumber = [numberRandom(), numberRandom()];
    const randomOperant = operantRandom();
    const question = `${randomNumber[0]} ${randomOperant} ${randomNumber[1]}`;
    const answer = mathematicalOperation(randomNumber, randomOperant);
    const arr = [question, answer];
    return arr;
  };
  games(description, getGame);
};

export default gameCalc;
