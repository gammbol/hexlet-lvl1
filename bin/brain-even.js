#!/usr/bin/env node
import askName from '../src/cli.js';
import { playGame } from '../src/games/even.js';

playGame(askName());
