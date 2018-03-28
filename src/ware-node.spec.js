const WareNode = require('./ware-node')

test('WareNode test', () => {
  const parent = { params: [{}] }
  const node1 = new WareNode(
    parent,
    function(obj, next) {
      obj.a = 1
      next()
    },
    null
  )

  const node2 = new WareNode(
    parent,
    function(obj) {
      expect(obj.a + 2).toBe(3)
    },
    null
  )

  node1.next = node2

  node1.run()
})
