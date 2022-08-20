/* 
    数据类型
        对象
*/

let a: object
// a = {}
// a = [] // Ok
// a = 5 // error

let b: { name: string, age?: number } // ? 表示可以选，可以不选
// b = { name: '艾夏拉', age: 20 } // Ok
// b = { name: 10, age: '艾夏拉' } // error
// b = { sex: 'nan' } // 必须指定 name 和 age 的值
// b = { name: '艾夏拉' } // Ok

// [propName: string]: any 表示任意类型的属性
let c: { name: string, [propName: string]: unknown}
c = { name: '艾夏拉', x: 10, y: 10 }

/* 
    设置函数结构的类型声明
*/
let d: (a:number, b:number) => number

/* 
    限制数组的结构
        类型[]
        Array<类型>
*/
let e: string[]
e = ['1', '2', '3'] // 这个数组中只能存字符串

let f: number[]
f = [1, 2, 2]

// 只能存数字的数组
let h: Array<number> 

// 
// let i = Array<object>;
// i = [{a:1}, {b:2}] // 为什么不对 ？？？

let i: object[]
i = [{a:1}, {b:2}]


/* 
    元组：就是固定长度的数组
        语法：[类型，类型，类型]
*/
let j: [string, string]
j = ['2', '2']


/* 
    枚举
*/

enum Gender {
    Male = 0,
    Female = 1
}

let k: { name: string, gender: Gender }
k = {
    name: '萨特',
    gender: Gender.Male
}

console.log(k.gender === Gender.Male);


/* 
    & 表示同时
*/
let m: { name: string } & { age: number }
m = { name: '布布种子', age: 18}


/* 
    类型的别名
*/
type myType = string

let n: myType

type hisType = 1|2|3|4|5
let q: hisType 



export default void 0