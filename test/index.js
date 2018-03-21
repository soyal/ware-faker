const testModule = require('../src/index')

test('test module', () => {
  expect(testModule(1, 2)).toBe(3)
})
