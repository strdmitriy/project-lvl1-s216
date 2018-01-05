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
  console.log(description);
  const name = questionName();
  console.log(`Hello, ${name}!\n`);
  let counter = 0;
  while (counter < 3) {
    const startGame = game();
    console.log(`Question: ${startGame[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === `${startGame[1]}`) {
      console.log('Correct!');
      counter += 1;
    } else {
      return console.log(`It's wrong answer. Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export { questionName, games, numberRandom };
