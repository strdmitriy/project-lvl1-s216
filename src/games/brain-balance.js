import { games, numberRandom } from '..';

const numberBalance = (num) => {
  const numberStrArr = String(num).split('').sort();
  const numberArr = [];
  for (let i = 0; i < numberStrArr.length; i += 1) {
    numberArr.push(Number(numberStrArr[i]));
  }
  while (numberArr[numberArr.length - 1] - numberArr[0] > 1) {
    numberArr[0] += 1;
    numberArr[numberArr.length - 1] -= 1;
    numberArr.sort();
  }
  return numberArr.join('');
};

const gameBalance = () => {
  const description = 'What is the result of the expression?';
  const getGame = () => {
    const randomNumber = [numberRandom(), numberRandom()];
    const question = `${randomNumber[0]}${randomNumber[1]}`;
    const answer = numberBalance(Number(question));
    const gameDateArr = [question, answer];
    return gameDateArr;
  };
  games(description, getGame);
};

export default gameBalance;
