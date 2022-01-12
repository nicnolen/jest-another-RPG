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
}

// method to initialize the game
Game.prototype.initializeGame = function () {
  // populate the enemies array
  this.enemies.push(new Enemy('goblin', 'sword'));
  this.enemies.push(new Enemy('orc', 'baseball bat'));
  this.enemies.push(new Enemy('skeleton', 'axe'));

  // what enemy is fighting the player
  this.currentEnemy = this.enemies[0];

  // prompt the user for their name
  inquirer
    .prompt({
      type: 'text',
      name: 'name',
      message: 'What is your name?',
    })
    // destructure name from the prompt object
    .then(({ name }) => {
      this.player = new Player(name);

      // call the startNewBattle() function to start a new round
      this.startNewBattle();
    });

  // method to start new battle
  Game.prototype.startNewBattle = function () {
    if (this.player.agility > this.currentEnemy.agility) {
      this.isPlayerTurn = true;
    } else {
      this.isPlayerTurn = false;
    }

    // display player stats
    console.log('Your stats are as follows:');
    console.table(this.player.getStats());

    // display enemy stats
    console.log(this.currentEnemy.getDescription());

    // call this.battle to determine the order of battle
    this.battle();
  };
};

// Make Game.js available for other files
module.exports = Game;
