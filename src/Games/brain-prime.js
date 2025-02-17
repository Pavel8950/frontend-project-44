import { userInteraction, getRandomInt } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => {
  userInteraction('brainPrime', 'yesNo', description);
};

const getDataPrime = () => {
  const num = getRandomInt(1, 101);
  let correctAnswer = 'yes';  //2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      correctAnswer = 'no';
      break;
    }
  }
  return [num, correctAnswer];
};

export { description, getDataPrime, brainPrime };

