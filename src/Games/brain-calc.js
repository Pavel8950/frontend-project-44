import sample from 'lodash.sample';
import { userInteraction, getRandomInt } from '../index.js';

const description = 'What is the result of the expression?';

const brainCalc = () => {
  userInteraction('brainCalc', 'number', description);
};

const getDataCalc = () => {
  const actions = ['+', '-', '*'];
  const randomAction = sample(actions);
  const num1 = getRandomInt(1, 101);
  const num2 = getRandomInt(1, 101);
  const mathExpression = `${num1} ${randomAction} ${num2}`;
  let correctAnswer = 0;
  switch (randomAction) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      console.log(`Unknown operation: '${randomAction}'!`);
  }
  return [mathExpression, correctAnswer];
};

export { description, getDataCalc, brainCalc };
