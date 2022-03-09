#!/usr/bin/env node
import askName from '../src/cli.js';
import { playGame } from '../src/games/even.js';

console.log('Welcome to the Brain Games!');
const name = askName();
console.log(`Hello, ${name}`);

playGame(name);
