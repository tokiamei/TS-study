class Snake {
  element:HTMLElement
  head:HTMLElement
  bodies:HTMLCollection
  isAlive = true

  constructor() {
    this.element = document.getElementById('snake')!
    this.bodies = this.element.children
    this.head = <HTMLElement>this.bodies[0]
  }
  /* 获取蛇的坐标 */
  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }
  /* 设置蛇的坐标 */
  set X(xValue) {
    if (this.X === xValue) {
      return
    }
    if (xValue < 0 || xValue > 290) {
      this.isAlive = false
      throw new Error('蛇死了，Game Over⚔️⚔️⚔️')
    }
    this.moveBody()
    this.head.style.left = xValue + 'px'
  }
  set Y(yValue) {
    if (this.Y === yValue) {
      return
    }
    if (yValue < 0 || yValue > 290) {
      this.isAlive = false
      throw new Error('蛇死了，Game Over⚔️⚔️⚔️')
    }
    this.moveBody()
    this.head.style.top = yValue + 'px'
  }
  /* 添加蛇身子 */
  addBody() {
    // this.element.insertBefore(document.createElement('div'), null)
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }
  moveBody() {
    for (let len = this.bodies.length, i = len - 1; i > 0; i--) {
      (<HTMLElement>this.bodies[i]).style.left = (<HTMLElement>this.bodies[i-1]).offsetLeft + 'px';
      (<HTMLElement>this.bodies[i]).style.top = (<HTMLElement>this.bodies[i-1]).offsetTop + 'px'
    }
  }
}

export default Snake