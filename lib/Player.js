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

  // returns an object with various player properties
  Player.prototype.getStats = function () {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility,
    };
  };

  // returns an inventory array or false if empty
  Player.prototype.getInventory = function () {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  };

  // returns the players health
  Player.prototype.getHealth = function () {
    return `${this.name}'s health is now ${this.health}!`;
  };

  // checks if the player is alive
  Player.prototype.isAlive = function () {
    if (this.health === 0) {
      return false;
    }
    return true;
  };
}

// Export Player.js methods and functions to other files
module.exports = Player;
