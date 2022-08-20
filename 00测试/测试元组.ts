/* ts 元组可变,长度不可变 */
let arr:[string, string] 
arr = ['a', 'b']
arr[1] = 'cc'
console.log(arr[0]);
