// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length -1 - i]
    });
}

function palindrome4(str) {
    return str.split('').reduce((reverse, char) => char + reverse, '') === str;
}


function palindrome3(str) {
    return str.split('').reduce((reverse, char) => char + reverse, '') === str;
}

function palindrome2(str) {
    return str.split('').reduce((reverse, char) => char + reverse, '') === str;
}

function palindrome1(str) {
    let reverse = '';
    str.split('').map(char => {
        reverse = char + reverse;
    })
    return reverse === str;
}

module.exports = palindrome;
