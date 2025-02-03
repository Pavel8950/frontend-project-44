import readlineSync from 'readline-sync';
const nameRequest = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('Your answer: ');
    console.log(`Hello, ${name}!`);
    return name;
}

export {nameRequest}; 