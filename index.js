const process = require("process");

const prompt = require("prompt-sync")({ sigint: true });

class Calculator {
  constructor(num1, num2, op) {
    this.num1 = num1;
    this.num2 = num2;
    this.op = op.trim();
  }

  static #add(a, b) {
    return a + b;
  }

  static #sub(a, b) {
    return a - b;
  }

  static #mul(a, b) {
    return a * b;
  }

  static #div(a, b) {
    if (b === 0) {
      console.log("[!] Cannot divide by 0");
      process.exit(1);
    }

    return a / b;
  }

  static #pow(a, b) {
    return Math.pow(a, b);
  }

  calculateResult() {
    if (isNaN(this.num1) || isNaN(this.num2) || this.op === "") {
      console.log("[!] Do not leave values blank");
      process.exit(1);
    }

    switch (this.op) {
      case "+":
        return Calculator.#add(this.num1, this.num2);
      case "-":
        return Calculator.#sub(this.num1, this.num2);
      case "*":
        return Calculator.#mul(this.num1, this.num2);
      case "/":
        return Calculator.#div(this.num1, this.num2);
      case "^":
        return Calculator.#pow(this.num1, this.num2);
      default:
        console.log("[!] Invalid operation");
        process.exit(1);
    }
  }
}

console.log("[~] Calculator [~]");
console.log("[~] Written in JavaScript from undefinedcode's C++ code\n");

const num1 = Number(prompt("[+] Enter first number: ", NaN));
const num2 = Number(prompt("[+] Enter second number: ", NaN));
const op = prompt("[+] Enter operation (+, -, *, /, ^): ", "");

console.log();

const calculator = new Calculator(num1, num2, op);
console.log(
  `[~] The answer of ${num1} ${op} ${num2} is ${
    calculator.calculateResult() === Infinity ? "[too high]" : calculator.calculateResult()
  }`
);
