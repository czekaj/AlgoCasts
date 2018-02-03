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
    const str = n.toString();
    const negative = str[0] === "-";
    let result = (negative === true ? "-" : "");
    for (let i = str.length -1; i >= negative ? 1 : 0; i--) {
        result += str[i];
    }
    return parseInt(result);
}

module.exports = reverseInt;
