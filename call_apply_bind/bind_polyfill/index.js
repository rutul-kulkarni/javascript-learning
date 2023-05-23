/*
  we can write a pollyfill for bind method via call or apply method. 
 */

let car = {
  company: "Suzuki",
  model: "Swift",
};

function printCarDetails(color, year) {
  console.log(
    "I am " +
      this.model +
      " from " +
      this.company +
      " of " +
      color +
      " color, " +
      year
  );
}

const print1 = printCarDetails.bind(car, "Blue");

print1("2020");

Function.prototype.customBind = function (...args) {
  //args will have first parameter as object reference and after that all are function parameters while writing function.bind
  let func = this,
    params = args.slice(1);
  return function (...args2) {
    // args2 will have all the parameters of a function while function invocation
    func.apply(args[0], [...params, ...args2]);
  };
};

const print2 = printCarDetails.customBind(car, "Red");

print2("2021");
