import * as utils from '../index.js';

const rules = 'What is the result of the expression?';

export default () => {
    const name = utils.welcome(rules);
    const signs = ['+', '-', '*'];
    let correct = true;

    for (let i = 0; i < utils.roundNum; i += 1) {
        const sign = signs[utils.getRandomInt(0, 2)];
        const firstNum = utils.getRandomInt(0, 100);
        const secondNum = utils.getRandomInt(0, 100);
        const answer = Number(utils.askQuestion(`${firstNum} ${sign} ${secondNum}`));
        const rightAns = utils.exampleMaker(firstNum, secondNum, sign);
        if (rightAns === answer) console.log('Correct!');
        else {
            utils.lose(name, answer, rightAns);
            correct = false;
            break;
        }
    }
    if (correct) utils.win(name);
};
