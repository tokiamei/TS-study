class Snake {
  /* 蛇的容器 */
  element:HTMLElement
  /* 表示蛇头的元素 */
  head:HTMLElement
  /* 表示蛇身的元素 */
  bodies:HTMLCollection
  /* 创建一个属性表示蛇是否活着 */
  isLive = true

  constructor() {
    this.element = <HTMLElement>document.getElementById('snake')

    this.head = <HTMLElement>document.querySelector('#snake > div')

    this.bodies = <HTMLCollection>this.element!.getElementsByTagName('div')
  }

  /* 蛇的坐标【即 蛇头的坐标】 */
  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }
  /* 设置蛇的坐标【蛇头的坐标】 */
  set X(xVal:number) {
    if (this.X === xVal) return 
    if (xVal < 0 || xVal > 290) {
      this.isLive = !this.isLive
      throw new Error('Game Over⚔️⚔️⚔️')
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === xVal) {
      if (xVal > this.X) {
        xVal = this.X - 10
      } else {
        xVal = this.X + 10
      }
    }
    this.moveBody()
    
    this.head.style.left = `${xVal}px`
    this.checkCollision()
  }

  set Y(yVal:number) {
    if (this.Y === yVal) return 
    if (yVal < 0 || yVal > 290) {
      this.isLive = !this.isLive
      throw new Error('Game Over⚔️⚔️⚔️')
    }
    if (this.bodies[1] && (yVal === (this.bodies[1] as HTMLElement).offsetTop)) {
      if (yVal > this.Y) {
        yVal = this.Y - 10
      } else {
        yVal = this.Y + 10
      }
    }
    this.moveBody()
    this.head.style.top = `${yVal}px`
    this.checkCollision()
  }
  /* 蛇身体边长的方法 */
  addBody() {
    // this.element.appendChild(document.createElement('div'))
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
    
    
  }
  /* 移动蛇的身体 */
  moveBody() {
    for (let len = this.bodies.length, i = len - 1; i > 0; i--) {
      let X = (this.bodies[i-1] as HTMLElement).offsetLeft
      let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

      (<HTMLElement>this.bodies[i]).style.left = X + 'px';
      (<HTMLElement>this.bodies[i]).style.top = Y + 'px'
    }
  }
  checkCollision() {
    for (let i = 1, len = this.bodies.length; i < len; i++) {
      const bd = <HTMLElement>this.bodies[i]
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error('蛇头撞到身子上了~~')
      }
    }
    
  }
}

export default Snake