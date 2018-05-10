// Create an object calculator with three methods:

// read() takes in two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

var calculator = {
  // ... your code ...
  read(x,y) {
      this.a = x;
      this.b = y;
  },
  sum() {
      return this.a+this.b;
  },
  mul() {
      return this.a*this.b;
  }
};

calculator.read(1,2);
console.log( calculator.sum() );
console.log( calculator.mul() );
