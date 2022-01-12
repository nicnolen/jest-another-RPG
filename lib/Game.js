// Import Inquirer
const inquirer = require('inquirer');
// Import Enemy.js and Player.js
const Enemy = require('./Enemy');
const Player = require('./Player');

// Game constructor
function Game() {
  this.roundNumber = 0;
  this.isPlayerTurn = false;
  this.enemies = [];
  this.currentEnemy;
  this.player;

  // add initializeGame() method
  Game.prototype.initializeGame = function () {
    // what enemy is fighting the player
    this.currentEnemy = this.enemies[0];

    // populate the enemies array
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
  };
}

// Make Game.js available for other files
module.exports = Game;
