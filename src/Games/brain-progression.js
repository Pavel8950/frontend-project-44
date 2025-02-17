import { userInteraction, getRandomInt } from '../index.js';

const description = 'What number is missing in the progression?';

const brainProgression = () => {
  userInteraction('brainProgression', 'number', description);
};

const getDataProgression = () => {
  let progression = '';
  let correctAnswer = 0;
  let start = getRandomInt(1, 101);
  const step = getRandomInt(1, 11);
  const place = getRandomInt(1, 10);

  for (let i = 0; i < 10; i += 1) {
    if (i === place) {
      correctAnswer = start + step * i;
      progression = `${progression} ..`;
    } else {
      progression = `${progression} ${ start + step * i}`;
    }
  }

  return [progression, correctAnswer];
};

export { description, getDataProgression, brainProgression };
