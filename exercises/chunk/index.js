// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(list, size) {
    let result = [];
    let index = 0;
    while(index < list.length) {
        result.push(list.slice(index, index + size));
        index += size;
    }
    return result;
}

function chunk2(list, size) {
    let result = [];
    let tempArr = [];
    for(let i = 0; i < list.length; i++) {
        const isLastElement = (i + 1) % size === 0;
        const isLastIndex = i + 1 === list.length;
        tempArr.push(list[i]);
        if (isLastElement || isLastIndex) {
            result.push(tempArr);
            tempArr = [];
        }
    }
    return result;
}

module.exports = chunk;
