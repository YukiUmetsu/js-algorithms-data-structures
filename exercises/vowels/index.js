// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels2(str) {
    let counter = 0;
    for (let i =0; i < str.length; i++) {
        if ('aiueo'.includes(str[i].toLowerCase())) {
            counter += 1;
        }
    }
    return counter;
}

function vowels(str) {
    // g means don't stop after first match
    // i means case insensitive
    const match = str.match(/[aiueo]/gi)
    return match ? match.length : 0;
}

module.exports = vowels;
