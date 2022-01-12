// Import the Potion() contructor and Character() constructor
const Potion = require('../lib/Potion');
const Character = require('./Character');

// Constructor function for the Player object name, health, strength and agility
class Player extends Character {
  constructor(name = '') {
    // call parent constructor
    super(name);

    // Import random potions to players inventory
    this.inventory = [new Potion('health'), new Potion()];
  }

  // returns an object with various player properties
  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility,
    };
  }

  // returns an inventory array or false if empty
  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  }

  // add potion to player inventory
  addPotion(potion) {
    this.inventory.push(potion);
  }

  // when player uses potion
  usePotion(index) {
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
  }
}

// Export Player.js methods and functions to other files
module.exports = Player;
