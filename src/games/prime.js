import * as utils from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
    const name = utils.welcome(rules);
    let correct = true;

    for (let i = 0; i < utils.roundNum; i += 1) {
        const numToAsk = utils.getRandomInt(0, 100);
        const answer = utils.askQuestion(`${numToAsk}`);
        const rightAns = utils.prime(numToAsk);

        if (answer === rightAns) console.log('Correct');
        else {
            utils.lose(name, answer, rightAns);
            correct = false;
            break;
        }
    }
    if (correct) utils.win(name);
};
