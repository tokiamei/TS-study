class Animal {
    name:string
    age:number

    constructor(name:string, age:number) {
        this.name = name
        this.age = age
    }

    sayHello() {
        console.log('动物打招呼');
    }
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

Hsq.sayHello()
Mimi.sayHello()
// console.log(Hsq, Mimi);


/* 
    语法糖
*/
class Person {
  constructor(private name:string, private age:number) {
    this.name = name
    this.age = age
  }
}

new Person('华子', 19)



export default void 0