const ware = require('../src/index')

test('ware example1', () => {
  // expect(1).toBe(1)
  const middleware = ware()
    .use(function(obj, next) {
      obj.a = 1
      next()
    })
    .use(function(obj, next) {
      obj.b = 2
      next()
    })

  middleware.run({}, function(obj) {
    expect(obj.a + obj.b).toBe(3)
  })
})
