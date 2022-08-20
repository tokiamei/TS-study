import ScorePanel from './ScorePanel'
import Food from './Food'
import Snake from './Snake'

class GameController {
  scorePanel:ScorePanel
  food:Food
  snake:Snake
  /* 上下左右方向 */
  direction = ''

  constructor() {
    this.scorePanel = new ScorePanel(2)
    this.food = new Food()
    this.snake = new Snake()
    this.init()
  }

  /* 初始化 */
  init() {
    this.food.changePosition()
    document.addEventListener('keydown', this.keyDownHandler.bind(this))
    this.run()
  }

  /* 游戏运行 */
  run() {
    /* if () {

    } */
    let X = this.snake.X
    let Y = this.snake.Y

    switch(this.direction) {
      case('ArrowDown'):
        Y += 10
        break
      case('ArrowUp'):
        Y -= 10
        break
      case('ArrowRight'):
        X += 10
        break
      case('ArrowLeft'):
        X -= 10
        break
    }
    
    if (this.checkAte(X, Y)) {
      this.food.changePosition()
      this.scorePanel.addScore()
      this.snake.addBody()
    }
    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch(e:any) {
      alert(e.message)
    }

    this.snake.isAlive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }

  /* 键盘监听回调函数 */
  keyDownHandler(event:KeyboardEvent) {
    this.direction = event.key
  }

  /* 判断蛇是否吃到食物 */
  checkAte(X:number, Y:number) {
    if (X === this.food.X && Y === this.food.Y) {
      return true
    } else {
      return false
    }
  }
  
}

export default GameController