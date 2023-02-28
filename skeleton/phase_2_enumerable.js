Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

function logElement(ele) {
  console.log(ele);
}

function square(num) {
  return num * num;
}

// [1, 2, 3].myEach(logElement);
// console.log([1, 2, 3].myEach(square));

// without declaring const variable to save results of callback first
Array.prototype.myMap = function (callback) {
  // debugger;
  let results = [];

  this.myEach(function (el) {
    results.push(callback(el));
  });

  return results;
};

// with declaring const variable to save results of callback first
Array.prototype.myMap = function (callback) {
  let results = [];

  const callbackToMyEach = function (el) {
    results.push(callback(el));
  };

  this.myEach(callbackToMyEach);

  return results;
};

// console.log([1, 2, 3].myMap(square));

Array.prototype.myReduce = function (callback, initialValue = this[0]) {
  let result = 0;

  this.myEach(function (el) {
    result += callback(initialValue, el);
  });
  return result;
};

function adder(x, y) {
  return x + y;
}

console.log([1, 2, 3].myReduce(adder));
