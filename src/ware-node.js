module.exports = class WareNode {
  /**
   * @param {Function} fn
   * @param {WareNode} nextNode
   */
  constructor(parent, fn, nextNode) {
    this.parent = parent
    this.fn = fn
    this.next = nextNode

    this.run = this.run.bind(this)
  }

  run() {
    let nextFn = null
    if (this.next) {
      nextFn = this.next.run
    }
    this.fn(...this.parent.params, nextFn)
  }
}
