class Food {
  element:HTMLElement
  // X:number = 0

  constructor() {
    this.element = document.getElementById('food')!
  }

  get X() {
    return this.element.offsetLeft
  }
  get Y() {
    return this.element.offsetTop
  }

  changePosition() {
    this.element.style.left =  Math.round(Math.random() * 29) * 10 + 'px'
    this.element.style.top =  Math.round(Math.random() * 29) * 10 + 'px'
  }
}

export default Food