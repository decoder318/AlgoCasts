// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // solution 1
    // return str.split('').reverse().join('');

    // solution 2 with ES6 reducer function
    return str.split('').reduce((prev, current) => current + prev, '');

    // solution 3
    // let reversed = '';
    // for (let character of str) {
    //     reversed = character + reversed;
    // }

    // return reversed;
}

module.exports = reverse;
