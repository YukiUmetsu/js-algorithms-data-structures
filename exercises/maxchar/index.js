// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charMax = '';
    const counters = str.split('').reduce((accumulator, currentValue) => {
        accumulator[currentValue] = accumulator[currentValue] + 1 || 1;
        return accumulator;
    }, {})
    Object.keys(counters).reduce((maxNum, currentKey) => {
        if (counters[currentKey] > maxNum) {
            charMax = currentKey;
            return counters[currentKey];
        }
        return maxNum;
    }, 0)
    return charMax;
}

module.exports = maxChar;
