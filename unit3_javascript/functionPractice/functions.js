// What is function?
"A function is a set instructions that performs a specific task";
"or job.";

// Functions come in 2 variations:
// built-in functions- These are instructions that are pre-written
// into the coding language, All we need to do is pass in data.

// examples
var className = "Coding class";
console.log(className);

// user-defined functions- These are custom instructions written by
// engineers to make code that performs specific tasks.

// How do we write a user-defined function?
function exampleFunction() {
  console.log("The function script is connected.");
}

// in order to have a function work, we need to call it.
// the above code is the function definition- MEANING- it's only
// telling the computer the instructions- NOT to actually run it.

// we access or call a function by writing its name.
// exampleFunction()

let accountBalance = 1000;

function depositMoney(depositAmount) {
  let newBalance = accountBalance + depositAmount;
  document.getElementById("data").innerHTML = newBalance;
}

function login(email, password) {
  console.log("depending on the data, you will or will not get access");
  // if email is incorrect or doesnt
}
// data that we want to manipulate goes inside of the
// round brackets.
// the instructions on what we want to do with the data
// goes inside of the curly brackets.
