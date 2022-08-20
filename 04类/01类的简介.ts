/* 
	类的使用
*/

class Hero {
	// 定义属性【实例属性】
	name:string = 'Akali'
	age:number = 20 
	// 静态属性，直接通过类名访问，并且实例访问不了
	static gender:string = '🐲'
	readonly secret:string = '我非常强大👻👻👻'
	static readonly hobby:string = '打电话'

	// 定义方法
	sayHello() {
		console.log('黑咯');
	}
	// 静态方法，直接通过类调用
	static fly() {
		console.log('I CAN FLY !!!');
		
	}
}

const Akali = new Hero()

// Akali.name = '启灵元神'
// Akali.secret = 'ssss' // 只读属性无法修改
// console.log(Akali.name, Hero.gender, typeof Hero.gender, Akali.secret, Hero.hobby);

// Akali.sayHello()
Hero.fly()
