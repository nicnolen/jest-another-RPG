// Import the Potion() contructor
const Potion = require('../lib/Potion');

// Constructor function for the Player object name, health, strength and agility
function Player(name = '') {
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);
  // Import random potions to players inventory
  this.inventory = [new Potion('health'), new Potion()];
}

// Export Player.js methods and functions to other files
module.exports = Player;
