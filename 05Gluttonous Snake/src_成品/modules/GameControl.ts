import Food from './Food'
import Score from './Score'
import Snake from './Snake'

// type direction = 'ArrowUp'|'ArrowDown'|'ArrowLeft'|'ArrowRight'|''

class GameControl {
  snake:Snake
  food:Food
  score:Score
  /* 键盘按键的方向 */
  direction:string = ''
  

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.score = new Score()
    /* 在这里初始化游戏的意思是：创建完对象游戏立即开始 */
    this.init()
  }
  /* 游戏初始化，调用后游戏开始 */
  init() {
    /* 绑定键盘按下的事件 */
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }

  /* 创建一个键盘按下的响应函数
      ArrowUp
      ArrowDown
      ArrowLeft
      ArrowRight
  */
 /* 这里改用箭头函数也可以 */
  keydownHandler(event:KeyboardEvent) {
    this.direction = event.key
  }

  /* 创建控制蛇移动的方法 */
  run() {
    let X = this.snake.X
    let Y = this.snake.Y

    switch(this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10
        break
      case 'ArrowDown':
      case 'Down':
        Y += 10
        break
      case 'ArrowLeft':
      case 'Left':
        X -= 10
        break
      case 'ArrowRight':
      case 'Right':
        X += 10
        break
    }
    
    // this.checkAte(X, Y)
    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch(e:any) {
      console.log(e, typeof e);
      
      alert(e.message)
    }

    this.snake.isLive && setTimeout(this.run.bind(this), 300 - (this.score.level - 1) * 30)
  }

  /* 判断蛇又没有吃到食物 */
  checkAte(X:number, Y:number) {
    if (X === this.food.X && Y === this.food.Y) {
      console.log('终于吃到食物了~~~');
      console.log(this.score.updateScore);
      
      this.food.changePosition()
      this.score.addScore()
      this.snake.addBody()
    }
    
  }
}

export default GameControl