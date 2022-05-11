document.write("Hello World"); // Writes message on the page
console.log("this is just a log message"); // Writes to console (which can only be seen in the console)

// document.querySelectorAll(".btn").forEach((element) => {
//   element.addEventListener("click", () => {
//     alert("this is awesome");
//   });
// });

let firstName = "Jacob";
let lastName = "Gonzales";
let address = "Main Street";
address = "First Street";

console.log(firstName);
console.log(lastName);
console.log(address);

let street = "rando Street";
let country = "Great USA";

let fullMailingAddress = street + " " + country;
console.log(fullMailingAddress);

const score1 = 54;
const score2 = 98;
const score3 = 23;

let totalScore = score1 + score2 + score3;
let scoreAverage = totalScore / 3;
const plates = 20;
const people = 7;
let remainingPlates = plates % people;
remainingPlates++;

const message = "There are " + remainingPlates + " plates available";

console.log(message);
console.log("Total Score:", totalScore);
console.log("Average Score:", scoreAverage);

// // Function definition/declaration
// function add(num1, num2) {
//   return num1 + num2;
// }

// // Function Expression
// const add = function (num1, num2) {
//   return num1 + num2;
// };

function calculateTotal(num1, num2, tax) {
  let subtotal = num1 + num2;
  return tax * subtotal + subtotal;
}

console.log(calculateTotal(5, 8, 0.08));

const order1 = calculateTotal(4, 8, 0.95);
const order2 = calculateTotal(5, 8, 0.02);
const order3 = calculateTotal(9, 2, 0.45);

console.log("Order1 Total:", order1);
console.log("Orer2 Total:", order2);
console.log("Order3 Total:", order3);

// Objects Challenge:

const Car = {
  make: "Honda",
  model: "civic",
  year: 2022,
  colors: ["grey", "blue", "black", "red"],
  hybrid: false,
  drive: function () {
    console.log("Hey i'm driving here!!");
  },
  stop() {
    console.log("brake check :P");
  },
};

Car.drive();
Car.stop();

document.body.style.backgroundColor = "red";
document.body.style.color = "green";
document.getElementById("btn").style.color = "red";

const buttonElement = document.getElementById("btn");

const headerElement = document.getElementById("title");
headerElement.style.backgroundColor = "white";

buttonElement.style.backgroundColor = "blue";
buttonElement.style.color = "white";

// The following create a node list containing each of the elements with the given tag
const headings = document.getElementsByTagName("h2");
const listItems = document.getElementsByTagName("li");

const betterItems = [...listItems];
betterItems.forEach(function (item) {
  item.style.color = "white";
  console.log(item);
});

console.log(listItems);
console.log(betterItems);

const finalListItems = document.querySelector("#result");
console.log(finalListItems);
finalListItems.style.backgroundColor = "beige";
finalListItems.style.color = "black";
