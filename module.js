// Importing functions from module1 into module2
import {greet, square} from './reload.js';

// Using imported functions
greet("Alice");

const result = square(5);
console.log(`The square of 5 is: ${result}`);
