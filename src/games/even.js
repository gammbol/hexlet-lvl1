import * as utils from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const name = utils.welcome(rules);

  for (let i = 0; i < utils.roundNum; i += 1) {
    const question = utils.getRandomInt();
    const answer = utils.askQuestion(`${question}`);

    const rightAns = utils.isEven(question, answer);
    if (rightAns === true) console.log('Correct!');
    else {
      utils.lose(name, answer, rightAns);
      break;
    }

    utils.win(name);
  }
};
