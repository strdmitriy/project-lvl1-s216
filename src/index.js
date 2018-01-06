import readlineSync from 'readline-sync';

const questionName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const numberRandom = () => {
  const random = Math.floor(Math.random() * (10 - 0)) - 0;
  return random;
};

const games = (description, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(description, '\n');
  const name = questionName();
  console.log(`Hello, ${name}!\n`);
  const acc = (counter) => {
    if (counter === 0) {
      return console.log(`Congratulations, ${name}!`);
    }
    const startGame = game();
    console.log(`Question: ${startGame[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === `${startGame[1]}`) {
      console.log('Correct!');
    } else {
      return console.log(`It's wrong answer. Let's try again, ${name}!`);
    }
    return acc(counter - 1);
  };
  return acc(3);
};

export { questionName, games, numberRandom };
