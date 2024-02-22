"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1
for (const [index, element] of game.scored.entries()) {
  console.log(`Goal ${index + 1} : ${element}`);
}
// 2
let average = 0;
const values = Object.values(game.odds);
for (const value of values) {
  average += value;
}
average /= values.length;
console.log(average);
// 3
for (const [team, value] of Object.entries(game.odds)) {
  const str = team == "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${str} : ${value}`);
}
const scorers = {};
const sagar = {
  age: 19,
};
// 4
const scoredPlayers = game.scored;
for (const player of scoredPlayers) {
  if (scorers[player]) {
    scorers[player] += 1;
  } else {
    scorers[player] = 1;
  }
}
