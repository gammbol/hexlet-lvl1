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
    console.log(`Let's try again, ${name}!`);
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

export const gcb = (first, second) => {
    const minimum = Math.min(first, second);
    for (let nod = minimum; nod > 1; nod -= 1) {
        if ((first % nod === 0) && (second % nod === 0)) return nod;
    }
    return 1;
};

export const progression = (step, skipId, progressLen) => {
    const progress = [];

    for (let i = 0; i < progressLen; i += 1) {
        if (progress.length === 0) progress.push(getRandomInt(0, 100));
        else if (i === skipId) progress.push('..');
        else if (progress[i - 1] === '..') progress.push(progress[i - 2] + step * 2);
        else progress.push(progress[i - 1] + step);
    }

    return progress;
};

export const prime = (num) => {
    for (let i = num - 1; i > 1; i -= 1) {
        if (num % i === 0) return 'no';
    }
    return 'yes';
};
