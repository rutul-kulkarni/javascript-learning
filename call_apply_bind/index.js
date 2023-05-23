// these methods are used for function borrowing.
// imagine a case we have array of person objects and there is one method in object to print fullname.
// copy pasting the method in each object is not a right way to do that
// so we will define a method and borrow it in each object

let person1 = {
  firstname: "Rutul",
  lastname: "Kulkarni",
};

let person2 = {
  firstname: "Piyush",
  lastname: "Pawar",
};

function getFullName(city, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + city + " ," + state
  );
}

//call
getFullName.call(person1, "Shirpur", "Maharashtra");
getFullName.call(person2, "Pune");

//apply
getFullName.apply(person1, ["Shirpur", "Maharashtra"]);
getFullName.apply(person2, ["Pune", "Maharashtra"]);

//bind     this will return the function which can executed laterly
const fn1 = getFullName.bind(person1, "Shirpur", "Maharashtra");
const fn2 = getFullName.bind(person2, "Pune");

console.log("fn1", fn1);

fn1();
