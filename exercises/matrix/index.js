// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n, arr = [], currentPosition = [0, 0], currentNumber = 1) {
    const goRight = [0, 1];
    const goLeft = [0, -1];
    const goDown = [1, 0];
    const goUp = [-1, 0];

    const originalN = (currentNumber === 1) ? n : arr[0].length;
    let procedure = [];
    if (n === 1 && currentNumber > 1) {
        procedure = [goRight];
    } else {
        for (let i = 0; i < n - 1; i++) {
            procedure.push(goRight);
        }
        for (let i = 0; i < n - 1; i++) {
            procedure.push(goDown);
        }
        for (let i = 0; i < n - 1; i++) {
            procedure.push(goLeft);
        }
        for (let i = 0; i < n - 2; i++) {
            procedure.push(goUp);
        }
    }

    for (let i = 0; i <= procedure.length; i++) {
        if (currentNumber > originalN * originalN) {
            break;
        }
        if (!arr[currentPosition[0]]) {
            arr[currentPosition[0]] = [];
        }
        arr[currentPosition[0]][currentPosition[1]] = currentNumber;
        if (i === procedure.length) {
            break;
        }
        // increment current number and go to next position
        currentNumber++;
        currentPosition[0] += procedure[i][0];  // column number
        currentPosition[1] += procedure[i][1];  // row number
    }

    if (n - 2 > 0) {
        // before it goes to next iteration, goRight and increment number
        arr[currentPosition[0]][currentPosition[1]] = currentNumber;
        currentNumber++;
        currentPosition[0] += goRight[0];
        currentPosition[1] += goRight[1];
        return matrix(n - 2, arr, currentPosition, currentNumber);
    } else {
        return arr;
    }
}

module.exports = matrix;
