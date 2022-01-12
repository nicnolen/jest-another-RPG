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

  // method for the player and enemy to battle
  Game.prototype.battle = function () {
    if (this.isPlayerTurn) {
      inquirer
        .prompt({
          type: 'list',
          message: 'What would you like to do?',
          name: 'action',
          choices: ['Attack', 'Use potion'],
        })
        .then(({ action }) => {
          if (action === 'Use potion') {
            // follow-up prompt will go here
          } else {
            const damage = this.player.getAttackValue();
            this.currentEnemy.reduceHealth(damage);

            console.log(`You attacked the ${this.currentEnemy.name}`);
            console.log(this.currentEnemy.getHealth());
          }
        });
    }
  };
};

// Make Game.js available for other files
module.exports = Game;
