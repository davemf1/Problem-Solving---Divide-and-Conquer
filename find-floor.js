function findFloor(array, num, low = 0, high = array.length -1 ) {
    if (low > high) 
        return -1;
    if (num >= array[high]) 
        return array[high];

    let mid = Math.floor((low + high) / 2);

    if (mid > 0 && array[mid -1] <= num && num < array[mid]) {
        return array[mid - 1];
    }

    if (num < array[mid]) {
        return findFloor(array, num, low, mid - 1);
    }

    return findFloor(array, num, mid + 1, high);
}

module.exports = findFloor