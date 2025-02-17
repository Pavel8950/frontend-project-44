import { userInteraction, getRandomInt } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  userInteraction('brainEven', 'yesNo', description);
};

const getDataEven = () => {
  let num = 0;
  let correctAnswer = '';
  let even = false;

  num = getRandomInt(1, 101);
  even = num % 2 === 0;
  switch (even) {
    case true:
      correctAnswer = 'yes';
      break;
    case false:
      correctAnswer = 'no';
      break;
    default:
      console.log(`Unknown value: '${even}'!`);
  }
  return [num, correctAnswer];
};

export { description, getDataEven, brainEven };
