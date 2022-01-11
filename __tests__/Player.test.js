// Include Player.js in the test file
const Player = require('../lib/Player');

// Write a test that checks if player has a name, health, strength and agility
test('creates a player object', () => {
  const player = new Player('Dave');

  expect(player.name).toBe('Dave');
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
});
