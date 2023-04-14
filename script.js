const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// create a variable named team that references players array
const team = players;

// create a variable named team1 that is a copy of players array
const team1 = [...players];

// create a variable named cap1 that is a copy of the person object
const cap1 = { ...person };

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
