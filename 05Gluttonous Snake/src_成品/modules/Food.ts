/* 定义食物类 */
class Food {
  element:HTMLElement

  constructor() {
    /* 获取页面中的 food 元素并赋值给 element */
    this.element = document.getElementById('food')!
  }

  /* 定义获取食物 x|y 坐标的方法 */
  get X() {
    return this.element.offsetLeft
  }
  get Y() {
    return this.element.offsetTop
  }

  /* 修改食物随机位置 */
  changePosition() {
    this.element.style.left = `${Math.round(Math.random() * 29)*10}px`
    this.element.style.top = `${Math.round(Math.random() * 29)*10}px`
  }
}

export default Food