import readlineSync from 'readline-sync';

export const ask_name = () => {
   const name = readlineSync.question('May I have your name? ');
   console.log(`Hello, ${name}!`); 
}