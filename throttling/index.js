/*
  Throttling is use to rate the function call. Shooting gun can be the example of this
*/

const expensiveFunction = () => {
  console.log("expensive");
};

const throttle = (fn, limit) => {
  //made a closure for flag to restrict the function call
  let flag = true;

  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterExpensive = throttle(expensiveFunction, 200);

//thottling and debouncing both can be used for performance enhancement as per the use case. 
//we cant state which one is better as its dependent on usecase
