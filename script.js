"use strict";

// 107. Rest Pattern and Parameters

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ----------- 1 --------------
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);
// Output : (4) [ 1, 2, 3, 4]

// ----------- 2 --------------
// const [a, b, ...other] = [1, 2, 3, 4, 5];
// console.log(a, b, other);
// Output : 1 2 (3) [ 3, 4, 5]

// ----------- 3 --------------
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, ...otherFood);
// Output : Pizza Risotto Focaccia Bruschetta Garlic Bread Caprese Salad

// ----------- 4 --------------
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
// Output : thu: { open: 12, close: 22}, fri: { open: 11 , close: 23, }

// ----------- 5 --------------
// const add = function (...numbers) {
//   console.log(numbers);
// };
// add(2, 3, 5);
// Output: (3)[(2, 3, 5)];
// const x = [23, 5, 7];
// add(...x);
// Output : (3) [23, 5, 7]

// ----------- 6 --------------
// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

// Output : mushrooms
//          (3) ['onion', 'olives', 'spinach']

// restaurant.orderPizza("mushrooms");
// Output : mushrooms
//          []
