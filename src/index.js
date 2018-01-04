import readlineSync from 'readline-sync';

const question = () => {
  const userName = readlineSync.question('May I have your name? ');
  return `Hello, ${userName}! \n`;
};

const game = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  let n = 0;
  while (n < 3) {
    const randomNumber = Math.floor(Math.random() * (100 - 0)) - 0;
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' || answer === 'no') {
      if (randomNumber % 2 === 0 && answer === 'yes') {
        console.log('Correct!');
        n += 1;
      } if (randomNumber % 2 !== 0 && answer === 'no') {
        console.log('Correct!');
        n += 1;
      } if (randomNumber % 2 === 0 && answer === 'no') {
        return `"no" is wrong answer ;(. Correct answer was "yes". \n Lets try again, ${userName}!`;
      } if (randomNumber % 2 !== 0 && answer === 'yes') {
        return `"yes" is wrong answer ;(. Correct answer was "no". \n Lets try again, ${userName}!`;
      }
    } else {
      return `Try again, ${userName}`;
    }
  }
  return `Congratulation, ${userName}`;
};

const gameCalc = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  let n = 0;
  while (n < 3) {
    const randomNumber = Math.floor(Math.random() * (100 - 0)) - 0;
    const randomNumber2 = Math.floor(Math.random() * (100 - 0)) - 0;
    const operant = ['+', '-', '*'];
    const randomOperant = operant[Math.floor(Math.random() * (3 - 0)) - 0];
    const randomOperation1 = randomOperant;
    console.log(`Question: ${randomNumber}${randomOperation1}${randomNumber2}`);
    const answer = readlineSync.question('Your answer: ');
    if (randomOperation1 === '+') {
      if (Number(answer) === randomNumber + randomNumber2) {
        console.log('Correct!');
        n += 1;
      } else {
        return 'Try again';
      }
    } if (randomOperation1 === '-') {
      if (Number(answer) === randomNumber - randomNumber2) {
        console.log('Correct!');
        n += 1;
      } else {
        return 'Try again';
      }
    } if (randomOperation1 === '*') {
      if (Number(answer) === randomNumber * randomNumber2) {
        console.log('Correct!');
        n += 1;
      } else {
        return 'Try again';
      }
    } if (randomOperation1 === '/') {
      if (Number(answer) === randomNumber / randomNumber2) {
        console.log('Correct!');
        n += 1;
      } else {
        return 'Try again';
      }
    }
  }
  return `Congratulation, ${userName}`;
};

export { question, game, gameCalc };
