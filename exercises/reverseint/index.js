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
    let sign = Math.sign(n) // if number is negative, it gives -1, if pisitive 1, 0 -> 0
    let numStrAbsolute = (n * sign).toString().split('').reverse().join('')
    return sign * parseInt(numStrAbsolute)
}

function reverseInt2(n) {
    if (n === 0) {
        return 0;
    }
    let finalStr = '';
    if (n < 0) {
        finalStr = '-';
        coefficient = -1;
    } else {
        coefficient = 1;
    }
    let numStrAbs = `${coefficient * n}`
    for (let i = numStrAbs.length - 1; i >= 0; i--) {
        let digit = numStrAbs[i]
        if (digit !== '0') {
            finalStr += digit
        }
    }
    return parseInt(finalStr)
}

module.exports = reverseInt;
