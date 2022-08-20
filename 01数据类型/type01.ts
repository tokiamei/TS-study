// 支持 js 的语法
// console.log("混沌魔君索伦森")

// 声明一个变量 a，用时指定它的类型为 number
let a: number

// a 的类型设置为了 number，在以后的使用过程中 a 的值只能是数字
a = 1
a = 33
// a = "hello" // error，但是可以编译

// 声明完变量直接赋值
let c: number = 20
let d: boolean = true

// 如果声明变量和赋值同时进行，TS 可以自动对变量进行类型检测
let x = true
console.log(x);

// 类型检测可以用在参数上
/* function f(a: number, b: number) {
    console.log( a + b )
}

f(3, "4") // 报错 */

// 函数返回值类型加限制
function f(a: number, b: number):number {
    return a + b
}

export default void 0