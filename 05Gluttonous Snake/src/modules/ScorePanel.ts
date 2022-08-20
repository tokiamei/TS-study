class ScorePanel {
  /* 分数和等级 */
  score:number = 0
  level:number = 1
  /* 分数和等级元素 */
  scoreEle:HTMLElement
  levelEle:HTMLElement
  /* 最大等级 */
  maxLevel:number
  /* 升级所需要的分数 */
  updateScore:number

  /* 构造器 */
  constructor(updateScore:number = 10, maxLevel:number = 10) {
    
    this.scoreEle = <HTMLElement>document.getElementById('score')!.children[0]
    this.levelEle = <HTMLElement>document.getElementById('level')!.children[0]
    this.updateScore = updateScore
    this.maxLevel = maxLevel
  }

  /* 分数上涨，朝某个方向走一格分数就上涨，但是上涨多少呢，涨一分吧 */
  addScore() {
    this.score++
    this.scoreEle.innerHTML = `${this.score}`
    /* 分数达到 10 就升一级 ，并且等级最高十级*/
    this.score % this.updateScore === 0 && this.level <= 10 && this.levelUp()
  }

  /* 等级升高 */
  levelUp() {
    this.level < this.maxLevel && this.level++
    this.levelEle.innerHTML = `${this.level}`
  }

}

export default ScorePanel