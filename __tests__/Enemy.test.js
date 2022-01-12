// Import Enemy.js file
const Enemy = require('../lib/Enemy.js');
// Import Potion.js file
const Potion = require('../lib/Potion.js');

// Mock the potion module so that we can isolate it to the enemy object
jest.mock('../lib/Potion.js');

// Enemy object test
test('creates an emey object', () => {
  const enemy = new Enemy('goblin', 'sword');

  expect(enemy.name).toBe('goblin');
  expect(enemy.weapon).toBe('sword');
  expect(enemy.health).toEqual(expect.any(Number));
  expect(enemy.strength).toEqual(expect.any(Number));
  expect(enemy.agility).toEqual(expect.any(Number));
});
