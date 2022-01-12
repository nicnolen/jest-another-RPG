// Include Player.js in the test file
const Player = require('../lib/Player');
const Potion = require('../lib/__mocks__/Potion');

// Mock/replace the constructor with the faked data
jest.mock('../lib/Potion');

console.log(new Potion());

// Write a test that checks if player has a name, health, strength and agility
test('creates a player object', () => {
  const player = new Player('Dave');

  expect(player.name).toBe('Dave');
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));

  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});

// Write a test that will get the players stats as an object
test("gets player's stats as an object", () => {
  const player = new Player('Dave');

  expect(player.getStats()).toHaveProperty('potions');
  expect(player.getStats()).toHaveProperty('health');
  expect(player.getStats()).toHaveProperty('strength');
  expect(player.getStats()).toHaveProperty('agility');
});

// Write a test to get the players inventory or return false
test('gets inventory from player or returns false', () => {
  const player = new Player('Dave');

  expect(player.getInventory()).toEqual(expect.any(Array));

  player.inventory = [];

  expect(player.getInventory()).toEqual(false);
});

// Write a test to get information about the player's health
test("gets player's health value", () => {
  const player = new Player('Dave');

  expect(player.getHealth()).toEqual(
    expect.stringContaining(player.health.toString())
  );
});

// Write a test to check if the play is alive
test('checks if the player is alive or not', () => {
  const player = new Player('Dave');

  expect(player.isAlive()).toBeTruthy();

  player.health = 0;

  expect(player.isAlive()).toBeFalsy();
});

// Write a test to see if the correct amount of health is being subtracted from the Player health property
test("subtracts from player's health", () => {
  const player = new Player('Dave');
  const oldHealth = player.health;

  player.reduceHealth(5);

  expect(player.health).toBe(oldHealth - 5);

  player.reduceHealth(99999);

  expect(player.health).toBe(0);
});

// Write a test to get the Player attack value
test("get player's attack value", () => {
  const player = new Player('Dave');
  player.strength = 10;

  expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});
