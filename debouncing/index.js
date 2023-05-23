/* 
It is used to limit the expensive function call. 
Imagine a case of search functionality. on every key press there are chances of api fire. so we can limit this api call via debouncing
*/

let functionCounter = 0;

function fetchData() {
  console.log("data fetching", functionCounter++);
}

function debounceAction(fn, timeDiff) {
  let timer;

  return function () {
    // this will have context of calling function and arguemnts will have arguments passed to called function ie. debouncefunc
    let context = this,
      args = arguments;

    //clear timeout will ignore the continious function call and only allows last function call which satisfy condition
    clearTimeout(timer);
    timer = setTimeout(() => {
      //apply is used because we are unaware about the function parameters. so to conquire this edge case we have used the apply
      fn.apply(context, args);
    }, timeDiff);
  };
}

const debouncefunc = debounceAction(fetchData, 300);
