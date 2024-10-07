class Calculator {
  constructor(x, y) {
    if (!this.isValidNumber(x) || !this.isValidNumber(y)) {
      throw new Error("Both arguments must be valid numbers.");
    }

    this.x = x;
    this.y = y;

    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);
  }

  isValidNumber(value) {
    return typeof value === "number" && isFinite(value);
  }

  setX(x) {
    if (!this.isValidNumber(x)) {
      throw new Error(" 'x' is not valid number.");
    }

    return (this.x = x);
  }

  setY(y) {
    if (!this.isValidNumber(y)) {
      throw new Error(" 'y' is not valid number");
    }

    return (this.y = y);
  }

  logSum() {
    return this.x + this.y;
  }

  logMul() {
    return this.x * this.y;
  }

  logSub() {
    return this.x - this.y;
  }

  logDiv() {
    if (this.y === 0) {
      throw new Error("Cannot divide with zero.");
    }
    return this.x / this.y;
  }
}

//test
const calculator = new Calculator(20, 5);

console.log(calculator.logSum());

console.log(calculator.logMul());

console.log(calculator.logSub());

console.log(calculator.logDiv());

const logSumRef = calculator.logSum;

console.log(logSumRef());
