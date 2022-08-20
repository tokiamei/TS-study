class Animal {
    private name:string
    age:number

    constructor(name:string, age:number) {
        this.name = name
        this.age = age
    }

    sayHello() {
        console.log('动物打招呼');
    }
}

const tiger = new Animal('猛虎王', 20)

// console.log(tiger);
Reflect.set(tiger, 'name', '虎子哥')
console.log(Reflect.get(tiger, 'name'))


export default void 0