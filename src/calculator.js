"use strict";

class Calculator {
  constructor() {}

  add(a, b) {
    return a + b;
  }

  totalSum(array) {
    let total = 0;
    array.forEach((int) => {
      total += int;
    });
    return total;
  }

  multiply(x, y) {
    if (typeof x !== "number") {
      throw new Error(`cannot multiply value of type ${typeof x}`);
    }
    if (typeof y !== "number") {
      throw new Error(`cannot multiply value of type ${typeof y}`);
    }

    return x * y;
  }

  multiplyMany(...params) {
    return params.reduce(this.multiply, 1);
  }

  factorial(x) {
    let total = 1;
    for (let i = x; i >= 1; i--) {
      total *= i;
    }
    return total;
  }
}

module.exports = new Calculator();
