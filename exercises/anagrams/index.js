// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return filterAndSortString(stringA) === filterAndSortString(stringB);
}

function anagrams1(stringA, stringB) {
    const mapA = createLetterMap(stringA);
    const mapB = createLetterMap(stringB);
    const keysA = Object.keys(mapA);
    const keysB = Object.keys(mapB);

    if (keysA.length !== keysB.length) {
        return false
    }
    for (const keyElm in mapA) {
        if (mapA[keyElm] != mapB[keyElm]) {
            return false;
        }
    }
    return true;
}

function filterAndSortString(givenStr) {
    return givenStr.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function createLetterMap(givenStr) {
    let letterMap = {};
    givenStr
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .map(letter => {
        if (!letterMap[letter]) {
            letterMap[letter] = 1;
        } else {
            letterMap[letter] += 1;
        }
    });
    return letterMap;
}

module.exports = anagrams;
