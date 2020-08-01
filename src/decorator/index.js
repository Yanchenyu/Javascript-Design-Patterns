/**
 * @description 装饰器模式
 * @author yancy
 */

/**
 * 优点：
 * 装饰类和被装饰类可以独立发展，不会相互耦合，装饰模式是继承的一个替代模式，装饰模式可以动态扩展一个实现类的功能。
 * 
 * 缺点：
 * 多层装饰比较复杂。

    应用场景：
    1，扩展一个类的功能。
    2，动态增加功能，动态撤销。

 */

class Sale {
    constructor(price) {
        this.price = price;
        this.decorator_list = [];   // 用来存储所有的装饰器
    }

    getPrice() {
        // 遍历所有的装饰器，这里默认取得是最后一位
        let price = this.price;
        let name;
        for (let i = 0; i < this.decorator_list.length; i++) {
            name = this.decorator_list[i];
            price = this.decorators[name].getPrice();
        }
        return price
    }

    get decorators(name) {
        switch (name) {
            case 'country':
                return {
                    getPrice: function() {
                        return this.price * 100;
                    }
                };
            case 'privince':
                return {
                    getPrice: function() {
                        return this.price * 200;
                    }
                };
            
        }
    }

    decorate(name) {
        this.decorator_list.push(name);
    }



}


