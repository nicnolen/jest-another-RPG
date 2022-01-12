// Import Potion.js and character.js
const Potion = require('./Potion');
const Character = require('./Character');

// Function to create the enemy object
class Enemy extends Character {
  constructor(name, weapon) {
    // call parent constructor
    super(name);

    this.weapon = weapon;
    this.potion = new Potion();
  }

  // function to check what the enemy is and what weapon the enemy has
  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }
}

// Allow this file to be shared with other files
module.exports = Enemy;
