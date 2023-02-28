Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

function logElement(ele) {
  console.log(ele);
}

function square(num) {
  console.log(num * num);
}

// [1, 2, 3].myEach(logElement);
// console.log([1, 2, 3].myEach(square));

Array.prototype.myMap = function (callback) {
  let results = [];
  function displayResults() {
    results.push(this.myEach(callback));
  }
  return results;
};

console.log([1, 2, 3].myMap(square));
