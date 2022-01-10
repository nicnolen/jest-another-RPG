// Include the Potion.js file for testing
const Potion = require('../lib/Potion.js');

// Run the test
test('creates a health potion object', () => {
  // create a new health potion object using the keyword new
  const potion = new Potion('health');

  expect(potion.name).toBe('health');
  expect(potion.value).toEqual(expect.any(Number));
});
