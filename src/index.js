import readlineSync from 'readline-sync';

const question = () => {
  const actual = readlineSync.question('May I have your name? ');
  return `Hello, ${actual}!`;
};

export { question };
