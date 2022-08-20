// 定义表示记分牌的类
class Score {
  score = 0
  level = 1
  /* 分数和等级所在的元素，在构造函数中进行初始化 */
  scoreEle:HTMLElement
  levelEle:HTMLElement
  /* 设置一个变量限制等级 */
  maxLevel:number
  /* 设置升一级所需要的分数 */
  updateScore:number

  /* 分数和等级 */
  constructor(maxLevel:number = 10, updateScore:number = 10) {
    /* 两种断言方式都可以 */
    this.scoreEle = <HTMLElement>document.querySelector('#score')!.children[0]
    this.levelEle = document.querySelector('#level')!.children[0] as HTMLElement
    // console.log(this.levelEle);
    
    this.maxLevel = maxLevel
    this.updateScore = updateScore
  }

  addScore() {
    this.score++
    this.scoreEle.innerHTML = `${this.score}`
    if (this.score % this.updateScore === 0) {
      this.levelUp()
    }
  }
  levelUp() {
    if (this.level < this.maxLevel) {
      this.level++
      this.levelEle.innerHTML = `${this.level}`
    }
  }
}

export default Score