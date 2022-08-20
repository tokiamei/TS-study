/* 
  描述一个对象类型
*/

type myType = {
	name:string
	age:number
}

/* 
	接口：用来定义一个类结构，用来定义一个类中应该包含有哪些属性和方法
		同时接口也可以当作类型声明去使用
		接口中所有属性都不能有实际的值
		接口只定义对象的结构，不考虑实际的值
			所有的方法都是 -- 抽象方法
*/
interface myInterface {
	name:string
	age:number
}
interface myInterface {
	gender:string
}


const obj:myInterface = {
	name: '钢铁加鲁鲁',
	age: 10,
	gender: '雄'
}

export default void 0