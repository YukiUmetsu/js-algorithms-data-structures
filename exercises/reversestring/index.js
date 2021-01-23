// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((accum, char) => char + accum, '');
}

function reverse3(str) {
    let result = '';
    str.split('').forEach(char => {
        result = char + result;
    });
    return result;
}

function reverse2(str) {
    return str.split('').reverse().join('');
}
function reverse1(str) {
    return [...str].reverse().join('');
}


module.exports = reverse;
