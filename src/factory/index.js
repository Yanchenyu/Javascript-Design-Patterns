/**
 * @description 工厂模式
 * @author yancy
 */

/**
 * 
 *  优点：
 *  一个调用者想创建一个对象，只要知道其名称就可以了。
    扩展性高，如果想增加一个产品，只要扩展一个工厂类就可以。
    屏蔽产品的具体实现，调用者只关心产品的接口。

    缺点：
    每次增加一个产品时，都需要增加一个具体类和对象实现工厂，使得系统中类的个数成倍增加，
    在一定程度上增加了系统的复杂度，同时也增加了系统具体类的依赖。这并不是什么好事。
 */

class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class Factory {
    // static 定义静态方法，只能通过类名去调用它，不能通过实例去调用这个方法
    // 通常用来定义一些克隆或者创建的方法
    static create(name) {
        return new Person(name)
    }
}

Factory.create('alanwu').getName()  //alanwu
