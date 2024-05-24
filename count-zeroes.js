function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (arr[middle] === 0 && (middle === 0 || arr[middle - 1] === 1)) {
            return arr.length - middle;
        } else if (arr[middle] === 1) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return 0;
}

module.exports = countZeroes