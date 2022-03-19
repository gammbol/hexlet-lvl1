import * as utils from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const name = utils.welcome(rules);
  let correct = true;

  for (let i = 0; i < utils.roundNum; i += 1) {
    const question = utils.getRandomInt(0, 100);
    const answer = utils.askQuestion(`${question}`);

    const rightAns = utils.isEven(question, answer);
    if (rightAns === true) console.log('Correct!');
    else {
      utils.lose(name, answer, rightAns);
      correct = false;
      break;
    }
  }
  if (correct) utils.win(name);
};
