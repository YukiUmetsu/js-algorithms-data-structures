// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    // moving the biggest element to the end of the array
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length -1 - i); j++) {
            // if next element is smaller, swap with current one
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    // moving the smallest element to the end of the array. Correct me if I'm wrong algorithm.
    for (let i = 0; i < arr.length; i++) {
        // assume the min is the current element
        let indexOfMin = i;
        for (let j = i+1; j < arr.length; j++) {
            // if assumption is wrong, update indexOfMin
            if (arr[indexOfMin] > arr[j]) {
                indexOfMin = j;
            }
        }
        // if indexOfMin was changed, swap
        if (indexOfMin !== i) {
            [arr[indexOfMin], arr[i]] = [arr[i], arr[indexOfMin]];
        }
    }
    return arr;
}

// https://www.geeksforgeeks.org/merge-sort/
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
   
    // devide the array into left half and right half
    const mid = Math.floor(arr.length/2);
    const leftSorted = mergeSort(arr.slice(0, mid));
    const rightSorted = mergeSort(arr.slice(mid));
    return merge(leftSorted, rightSorted);
}

function merge(left, right) {
    const result = [];
    while(left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
