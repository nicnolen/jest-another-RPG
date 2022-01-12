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

  // function to get enemy health
  Enemy.prototype.getHealth = function () {
    return `The ${this.name}'s health is now ${this.health}!`;
  };

  // function to check if enemy is alive
  Enemy.prototype.isAlive = function () {
    if (this.health === 0) {
      return false;
    }
    return true;
  };

  // function to get enemy attack value
  Enemy.prototype.getAttackValue = function () {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
  };

  // function to check if enemy health is reduced
  Enemy.prototype.reduceHealth = function (health) {
    this.health -= health;

    if (this.health < 0) {
      this.health = 0;
    }
  };
}

// Allow this file to be shared with other files
module.exports = Enemy;
