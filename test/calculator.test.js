"use strict";

const { expect } = require("chai");
const calculator = require("../src/calculator");

describe("calculator", () => {
  it("should add two numbers", () => {
    const result = calculator.add(5, 3);
    expect(result).to.equal(8);
  });

  it("should throw errors for multiplying invalid types", () => {
    expect(() => calculator.multiply(3, "4")).to.throw();
    expect(() => calculator.multiply("3", null)).to.throw();
  });

  it("should multiply two numbers", () => {
    const result = calculator.multiply(2, 3);
    expect(result).to.equal(6);
  });

  it("should multiply multiple numbers", () => {
    const result = calculator.multiplyMany(1, 2, 3, 4, 5);
    expect(result).to.equal(120);
  });

  it("should return a total sum for a number[]", () => {
    const array = [1, 2, 3, 4, 5];
    const result = calculator.totalSum(array);
    expect(result).to.equal(15);
  });

  // factorial
  it("should multiply all whole numbers from our chosen number down to one", () => {
    const result = calculator.factorial(5);
    expect(result).to.equal(120);
  });
});
