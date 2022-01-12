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

// Test for enemy health
test("gets enemy's health value", () => {
  const enemy = new Enemy('goblin', 'sword');

  expect(enemy.getHealth()).toEqual(
    expect.stringContaining(enemy.health.toString())
  );
});

// Test if enemy is still alive
test('checks if enemy is alive or not', () => {
  const enemy = new Enemy('goblin', 'sword');

  expect(enemy.isAlive()).toBeTruthy();

  enemy.health = 0;

  expect(enemy.isAlive()).toBeFalsy();
});

// Test for enemy attack value
test("gets enemy's attack value", () => {
  const enemy = new Enemy('goblin', 'sword');
  enemy.strength = 10;

  expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

// Test for subtracting enemy health
test("subtracts from enemy's health", () => {
  const enemy = new Enemy('goblin', 'sword');
  const oldHealth = enemy.health;

  enemy.reduceHealth(5);

  expect(enemy.health).toBe(oldHealth - 5);

  enemy.reduceHealth(99999);

  expect(enemy.health).toBe(0);
});

// test to see what the enemy is and what weapon they have
test('gets a description of the enemy', () => {
  const enemy = new Enemy('goblin', 'sword');

  expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
  expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
});
