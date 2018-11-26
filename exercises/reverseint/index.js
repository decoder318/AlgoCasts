// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reversed = parseInt(Math.abs(n)
        .toString()
        .split('')
        .reduce((prev, current) => current + prev)) * Math.sign(n);

    return reversed;
}

module.exports = reverseInt;
