Array.prototype.uniq = function () {
  const uniqArray = [];

  for (let i = 0; i < this.length; i++) {
    let n = this[i];

    if (!uniqArray.includes(n)) {
      uniqArray.push(n);
    }
  }

  return uniqArray;
};

Array.prototype.twoSum = function () {
  const results = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        results.push([i, j]);
      }
    }
  }

  return results;
};

// console.log(([1,-1,3,0,-3,0]).twoSum())

Array.prototype.transpose = function () {
  // [[1, 2], [3, 4]] => [[1, 3], [2, 4]]
  let resultsArr = [];

  for (let i = 0; i < this[0].length; i++) {
    let resultsRow = [];
    for (let j = 0; j < this.length; j++) {
      resultsRow.push(this[j][i]);
    }
    resultsArr.push(resultsRow);
  }

  return resultsArr;
};

console.log(
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ].transpose()
);
