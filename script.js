"use strict";
// const airline = "TAP Air Portugal";
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = "jOnAs";
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = "hello@jonas.io";
// const loginEmail = " Hello@Jonas.Io \n";
// const correctVersion = loginEmail.toLowerCase().trim();
// console.log(correctVersion);
// console.log(email === correctVersion);

// const priceGB = "288,97£";
// const priceUS = priceGB.replace("£", "$").replace(",", ".");
// console.log(priceUS);
// const announcement =
//   "All passengers come to boarding door 23. Boarding door 23!";
// console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));
// console.log(announcement.replaceAll(/door/g, "gate"));

// const plane = "Airbus A320neo";
// console.log(plane.includes("A320"));
// console.log(plane.includes("Boeing"));
// console.log(plane.startsWith("Air"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
//   console.log("Part of the NEW Airbus family");
// }

// // Practice Assignment

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are not allowed on board");
//   } else {
//     console.log("Welcome aboard");
//   }
// };
// checkBaggage("I have a laptop, some Food and a pocket Knife");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snacks and a gun for protection");

// console.log("a+very+nice+string".split("+"));
// console.log("Jonas Schmedtmann".split(" "));
// const [firstName, lastName] = "Jonas Schmedtmann".split(" ");
// const newName = ["Mr.", firstName, lastName.toUpperCase()].join("--");
// console.log(newName);
// const capitalizeName = function (name) {
//   const arr = [];
//   for (const x of name.split(" ")) {
//     arr.push(x.replace(x[0], x[0].toUpperCase()));
//   }
//   console.log(arr.join(" "));
// };
// capitalizeName("jessica ann smith davis");
// capitalizeName("jonas schmedtmann");

// const message = "Go to gate 23!";
// console.log(message.padStart(25, "+"));
// console.log(message.padStart(25, "+").padEnd(30, "+"));
// console.log("Jonas".padStart(25, "+"));
// console.log("Jonas".padStart(25, "+").padEnd(30, "+"));

const hidden = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "X");
};
console.log(hidden("939i39i29022"));
console.log(hidden(93912390838109));
const text = "Hello, I am Sagar Pal - ";
console.log(text.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in lne ${"✈️ ".repeat(n)}`);
};
planesInLine(3);
planesInLine(10);
