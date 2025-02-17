import { userInteraction, getRandomInt } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  userInteraction('brainGcd', 'number', description);
};

const getDataGcd = () => {
  const num1 = getRandomInt(1, 101);
  const num2 = getRandomInt(1, 101);
  const mathExpression = `${num1} ${num2}`;
  let correctAnswer = 1;
  let i = Math.max(num1, num2);

  for (i; i >= 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      correctAnswer = i;
      break;
    }
  }
  return [mathExpression, correctAnswer];
};

export { description, getDataGcd, brainGcd };
