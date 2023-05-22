console.log("Hey");

const data = fetch("https://api.publicapis.org/entries");

console.log(
  "Bye",
  data.then((value) => console.log("val", value))
);

let ab = "439938";

console.log([...`${ab}`]);
