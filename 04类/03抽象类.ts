abstract class Animal {
    name:string
    age:number

    constructor(name:string, age:number) {
        this.name = name
        this.age = age
    }

    /* 
        定义抽象方法
            抽象方法只能定义在 抽象类 中
            子类必须重写抽象方法
    */
    abstract sayHello():void
}

class Dog extends Animal{
    sex:string
    constructor(name:string, age:number, sex:string) {
        super(name, age)
        this.sex = sex
    }
    sayHello() {
        console.log('汪汪汪🐶🐶🐶');
    }
}

class Cat extends Animal{
    sayHello() {
        console.log('喵喵喵🐱🐱🐱');
    }
}

const Hsq = new Dog("哈士奇", 3, '公')
const Mimi = new Cat("咪咪", 2)


export default void 0