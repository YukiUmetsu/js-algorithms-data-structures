// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const fullWidth = 2 * n -1;
    for(let i = 1; i <= n; i++) {
        const width = 2 * i - 1;
        const numOfPadding = (fullWidth - width)/2;
        console.log(' '.repeat(numOfPadding) + '#'.repeat(width) + ' '.repeat(numOfPadding));
    }
}

module.exports = pyramid;
