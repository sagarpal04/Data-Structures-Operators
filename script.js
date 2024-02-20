"use strict";

// 108 Short Circuiting(&& and ||)

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

console.log("-------- OR --------");
// Use Any data type, return any data type, short-circuiting
console.log(3 || "Jonas");
// Output : 3
console.log("" || "Jonas");
// Output : "Jonas"
console.log(true || 0);
// Output : true
console.log(undefined || null);
// Output : null
console.log(undefined || 0 || "" || "Hello" || 23 || null);
// Output : Hello
restaurant.newGuests = 23;
const guests1 = restaurant.newGuests ? restaurant.newGuests : 10;
console.log(restaurant.newGuests);
// Output : 23
const guest2 = restaurant.newGuests || 10;
console.log(guest2);
// Output : 23
console.log(0 && "Jonas");
// Output : 0
console.log(7 && "Jonas");
// Output : Jonas
console.log("Hello" && 23 && null && "Jonas");
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "spinach");
}
// Output : mushroom
//          ['spinach']
restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach");
// Output : mushroom
//          ['spinach']
