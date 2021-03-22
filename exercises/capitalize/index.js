// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize2(str) {
    let strArr = str.split('');
    let shouldCapitalize = true;
    for (let i = 0; i < strArr.length; i++) {
        if (shouldCapitalize) {
            strArr[i] = strArr[i].toUpperCase();
        }
        shouldCapitalize = strArr[i] === ' ';
    }
    return strArr.join('');
}

function capitalize(str) {
    let words = [];
    for (const word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}

module.exports = capitalize;
