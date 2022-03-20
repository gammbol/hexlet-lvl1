import * as utils from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

export default () => {
    const name = utils.welcome(rules);
    let correct = true;

    for (let i = 0; i < utils.roundNum; i += 1) {
        const firstNum = utils.getRandomInt(0, 100);
        const secondNum = utils.getRandomInt(0, 100);
        const answer = Number(utils.askQuestion(`${firstNum} ${secondNum}`));
        const rightAns = utils.gcb(firstNum, secondNum);

        if (answer === rightAns) console.log('Correct!');
        else {
            utils.lose(name, answer, rightAns);
            correct = false;
            break;
        }
    }

    if (correct) utils.win(name);
};
