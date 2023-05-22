let functionCounter = 0;

function fetchData() {
  console.log("data fetching", functionCounter++);
}

function debounceAction(fn, timeDiff) {
  let timer;

  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fetchData.apply(context, args);
    }, timeDiff);
  };
}

const debouncefunc = debounceAction(fetchData, 300);
