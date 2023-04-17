function sortedFrequency(array, num) {
    let firstIdx = findFirst(array, num);
    if (firstIdx === -1)
        return firstIdx;
    let lastIdx = findLast(array, num);
        return lastIdx - firstIdx + 1;
}

function findFirst(array, num, low = 0, high = array.length - 1) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2);
        if ((mid === 0 || num > array[mid - 1]) && array[mid] ===num) {
            return mid;
        } else if (num > array[mid]) {
            return findFirst(array, num, mid + 1, high);
        } else {
            return findFirst(array, num, low, mid - 1);
        }
    }

    return -1;
}

function findLast(array, num, low = 0, high = array.length - 1) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2);
        if ((mid === array.length - 1 || num < array[mid + 1]) && array[mid] === num) {
            return mid;
        } else if (num < array[mid]) {
            return findLast(array, num, low, mid - 1);
        } else {
            return findFirst(array, num, mid + 1, high);
        }
    }

    return -1;
}

module.exports = sortedFrequency