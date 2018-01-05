import { games, numberRandom } from '..';

const even = (num) => {
  if (num % 2 === 0) {
    return true;
  } return false;
};

const gameEven = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".\n';
  const getGame = () => {
    const num = numberRandom();
    const answer = (number) => {
      if (even(number)) {
        return 'yes';
      } return 'no';
    };
    const question = `${num}`;
    const arr = [question, answer(num)];
    return arr;
  };
  games(description, getGame);
};

export default gameEven;
