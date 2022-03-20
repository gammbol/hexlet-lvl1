import * as utils from '../index.js';

const rules = 'What number is missing in the progression?';

export default () => {
    const name = utils.welcome(rules);
    let correct = true;

    for (let i = 0; i < utils.roundNum; i += 1) {
        const step = utils.getRandomInt(1, 100);
        const progressLen = utils.getRandomInt(5, 10);
        const skipId = utils.getRandomInt(1, progressLen - 1);
        const progression = utils.progression(step, skipId, progressLen);
        const answer = utils.askQuestion(`${progression.join(' ')}`);
        const rightAns = progression[skipId - 1] + step;

        if (Number(answer) === rightAns) console.log('Correct!');
        else {
            utils.lose(name, answer, rightAns);
            correct = false;
            break;
        }
    }
    if (correct) utils.win(name);
};
