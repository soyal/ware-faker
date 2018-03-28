const WareNode = require('./ware-node')

module.exports = class MiddleWare {
  constructor() {
    this.headNode = null
    this.curNode = null
    this.params = null
  }

  /**
   * 添加中间件
   * @param {Function} fn
   */
  use(fn) {
    const node = new WareNode(this, fn, null)
    this.insert(node)
    return this
  }

  /**
   * @param {WareNode} node
   */
  insert(node) {
    if (!this.headNode) {
      this.headNode = node
      this.curNode = node
    } else {
      this.curNode.next = node
      this.curNode = node
    }
  }

  run() {
    const args = Array.prototype.slice.call(arguments, 0)
    const callback = args[args.length - 1]

    let params
    if (typeof callback === 'function') {
      this.use(callback)
      params = args.slice(0, -1)
    } else {
      params = args
    }

    this.params = params
    this.headNode.run()
  }
}
