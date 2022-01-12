// Import Potion.js
const Potion = require('./Potion');

// Function to create the enemy object
function Enemy(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  this.potion = new Potion();

  this.health = Math.floor(Math.random() * 10 + 85);
  this.strength = Math.floor(Math.random() * 5 + 5);
  this.agility = Math.floor(Math.random() * 5 + 5);
}

// Allow this file to be shared with other files
module.exports = Enemy;
