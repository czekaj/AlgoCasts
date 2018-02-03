// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let maxcount = 0;
    let result = '';
    let count = {};
    for (let char of str) {
        if (!isNaN(count[char])) {
            count[char]++;
        } else {
            count[char] = maxcount = 1;
            result = char;
        }
        if (maxcount < count[char]) {
            maxcount = count[char];
            result = char; 
        }
    }
    return result;


}

module.exports = maxChar;
