import readlineSync from 'readline-sync';

const getRandomInt = () => {
  const ranNum = Math.floor(Math.random() * 100);
  return ranNum;
};

const checkIntAns = (num, ans) => {
  const ansBull = ans === 'yes';
  if ((num % 2 === 0) === ansBull) {
    return true;
  }
  return false;
};

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const ranInt = getRandomInt();
    console.log(`Question: ${ranInt}`);

    const ans = readlineSync.question('Your answer: ');

    if (checkIntAns(ranInt, ans)) {
      console.log('Correct!');
    } else {
      const contrAns = (ans === 'yes') ? 'no' : 'yes';
      console.log(`'${ans}' is wrong ;(. Correct answer was '${contrAns}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
