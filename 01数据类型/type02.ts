// 1.用字面量进行类型声明
// 意思就是说，a 只能取 10【有点像 const】
let a: 10 = 10;
// b 只能取这两个值，后面直接赋值，用 | 连接多个值
let b: 'male' | 'false' = 'male' 
console.log(a, b);

let c: boolean | string = true // OK

// let c: boolean | string = 10 // error

// 2.any：关闭 TS 的变量检测
let d: any // 等价于：let d，也就是 js 的写法，这种在 ts 下也会被自动转换为 any 类型
// d = 10
// let s: string = d // OK，但是 s 直接由 string 变成了 number
// console.log('#####', s, typeof s); // ##### 10 number


// 3.unknown
let p: unknown

p = 10
p = 'kkk'
p = true
// let s: string = p // 报错
// 对上面错误进行处理
let s: string

// 第一种方法：判断类型
/* if (typeof p === 'string') {
    s = p
} */

// 第二种方法：类型断言，用来告诉编译器变量的实际类型
/* 
    语法：
        【1】变量 as 类型
        【2】<类型>变量
*/
// s = p as string

s = <string>p

// 返回值类型是 true | 123
function f() {
    if (3 > 2) {
        return true
    } else {
        return 123
    }
}

// 无返回值
function g(): void {

}

// never：永远不会有返回结果
function h(): never {
    throw new Error('报错了')
}


export default void 0