// MODULES
// CommonJS, every file is module (by Default)
// Modules - Encapsulated Code (Only share minimum)

const { arrOfNumbers } = require('./3.1 - Numbers');
const { checkPrime } = require('./3.2 - Prime Function');
// require('./3.3 - Another App');

arrOfNumbers.map((num) => {
    checkPrime(num);
})
console.log(process);
