import readlineSync from 'readline-sync';
import askName from './cli.js';

export const roundNum = 3;

export const welcome = (rules) => {
    // start of the game
    const name = askName();
    console.log(rules);
    return name;
};

export const askQuestion = (quest) => {
    console.log(`Question: ${quest}`);
    const answer = readlineSync.question('Your answer: ');
    return answer;
};

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const isEven = (num, answer) => {
    const boolRightAns = (num % 2 === 0) ? 'yes' : 'no';
    if (boolRightAns === answer) return true;
    return boolRightAns;
};

export const lose = (name, userAns, rightAns) => {
    console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${rightAns}'`);
    console.log(`Let's try again, ${name}`);
};

export const win = (name) => console.log(`Congratulations, ${name}!`);

export const sum = (firstNum, secondNum) => firstNum + secondNum;
export const min = (firstNum, secondNum) => firstNum - secondNum;
export const mult = (firstNum, secondNum) => firstNum * secondNum;

export const exampleMaker = (first, second, sign) => {
    if (sign === '+') return first + second;
    if (sign === '-') return first - second;
    if (sign === '*') return first * second;
    return false;
};
