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

  // checks if the players health is being reduced
  Player.prototype.reduceHealth = function (health) {
    this.health -= health;

    // make sure the health never goes negative
    if (this.health < 0) {
      this.health = 0;
    }
  };

  // checks player attack value
  Player.prototype.getAttackValue = function () {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
  };

  // add potion to player inventory
  Player.prototype.addPotion = function (potion) {
    this.inventory.push(potion);
  };

  // when player uses potion
  Player.prototype.usePotion = function (index) {
    // inventory has a single potion removed (the 1 in .splice represents the number of items to remove from the start index) at a specific index value and put into a new 'removed items' array
    // then the potion at index [0] of the 'removed item' array is saved to a potion variable
    const potion = this.getInventory().splice(index, 1)[0];

    switch (potion.name) {
      case 'agility':
        this.agility += potion.value;
        break;
      case 'health':
        this.health += potion.value;
        break;
      case 'strength':
        this.strength += potion.value;
        break;
    }
  };
}

// Export Player.js methods and functions to other files
module.exports = Player;
