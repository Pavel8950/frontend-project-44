import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let num = 0;
  let answer = '';
  let correctAnswer = '';
  let even = false;
  for (let i = 0; i < 3; i += 1) {
    num = getRandomInt(1, 101);
    console.log(`Question: ${num}`);
    even = num % 2 === 0;
    answer = readlineSync.question('Your answer: ');

    if ((even === true && answer === 'yes') || (even === false  && answer === 'no')) {
      console.log('Correct!');
    } else {
      answer === 'yes' ? correctAnswer = 'no' : correctAnswer = 'yes';
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}(`);
      return;//break;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
}

export { brainEven };
