// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

function slowFib(n = 0) {
    if (n < 2) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}

const fib = memoize(slowFib);

function fib2(n = 0) {
    if (n < 2) {
        return n;
    }
    prev1 = 1;
    prev2 = 0;
    current = 0;

    while(n > 1) {
        current = prev1 + prev2;

        // adjust for the next iteration
        prev2 = prev1;
        prev1 = current;
        n--;
    }
    return current;
}

module.exports = fib;
