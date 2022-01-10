// Include the Potion.js file for testing
const Potion = require('../lib/Potion.js');

// Run the test for a health potion
test('creates a health potion object', () => {
  // create a new health potion object using the keyword new
  const potion = new Potion('health');

  expect(potion.name).toBe('health');
  expect(potion.value).toEqual(expect.any(Number));
});

// Run the test for a random potion
test('creates a random potion object', () => {
  // create a new potion object using the keyword new
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});
