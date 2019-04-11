构造函数construct
prototype 原型
实例 instance
JS没有类，只有对象，所有的类，都是通过原型来拿到

通过构造函数person，生成了person这个实例，
同时我们在person 的原型，person.prototype
定义了getName方法
构造函数----->构造函数的原型<---------构造函数生成的实例
     prototype               _proto_
            <-----------
    constructor
构造函数 运行的，new Person()  this->新的实例，空对象person{}.name
实例怎么拿到原型对象的方法或者属性?
1. 任何对象都有_proto_私有属性，这个对象的出处是哪？
实例和类之间没有血缘关系，_proto_
2. 构造函数有prototype属性
3. 原型对象上有constructor属性指向构造函数,
js 面向对象是基于原型的，函数，原型对象，实例
链

person.__proto__===Person.prototype
true



!