import { games, numberRandom } from '..';

const even = (num) => {
  if (num % 2 === 0) {
    return true;
  } return false;
};

const gameEven = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const getGame = () => {
    const num = numberRandom();
    const answer = (number) => {
      if (even(number)) {
        return 'yes';
      } return 'no';
    };
    const question = `${num}`;
    const gameDateArr = [question, answer(num)];
    return gameDateArr;
  };
  games(description, getGame);
};

export default gameEven;
