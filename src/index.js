import readlineSync from 'readline-sync';
import { getDataCalc } from './Games/brain-calc.js';
import { getDataEven } from './Games/brain-even.js';
import { getDataGcd } from './Games/brain-gcd.js';
import { getDataProgression } from './Games/brain-progression.js';
import { getDataPrime } from './Games/brain-prime.js';

function userName() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function userInteraction(funcSource, questionType, description) {
  const name = userName();
  let questionAnswer = [];
  let question = 0;
  let correctAnswer = 0;
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    switch (funcSource) {
      case 'brainEven':
        questionAnswer = getDataEven(); // [question, correctAnswer]
        break;
      case 'brainCalc':
        questionAnswer = getDataCalc();
        break;
      case 'brainGcd':
        questionAnswer = getDataGcd();
        break;
      case 'brainProgression':
        questionAnswer = getDataProgression();
        break;
      case 'brainPrime':
        questionAnswer = getDataPrime();
        break;
      default:
        console.log(`Unknown function: '${funcSource}'!`);
    }
    question = questionAnswer[0];
    correctAnswer = questionAnswer[1];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((userAnswer === correctAnswer) && (questionType === 'yesNo')) {
      console.log('Correct!');
    } else if (Number(userAnswer) === Number(correctAnswer) && (questionType === 'number')) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. 
            \nLet's try again, ${name}(`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
}

export { userName, userInteraction, getRandomInt };
