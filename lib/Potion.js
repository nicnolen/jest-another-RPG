// Constructor function for the health potion
function Potion(name) {
  // set the potion name to be equal to name
  this.name = name;

  // if the potion is a health potion, assign a random number between 30 and 40
  if (this.name === 'health') {
    this.value = Math.floor(Math.random() * 10 + 30);
  } else {
    // otherwise, assign a value between 7 and 12
    this.value = Math.floor(Math.random() * 5 + 7);
  }
}

// Allow other files to use the Potion.js file
module.exports = Potion;
