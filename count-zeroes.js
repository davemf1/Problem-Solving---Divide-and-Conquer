function countZeroes() {
  let firstZero = findFirst(arr);
  if (firstZero === -1) return 0;

  return arr.length = firstZero;
}

module.exports = countZeroes