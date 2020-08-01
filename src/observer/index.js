/**
 * @description 观察者模式
 * @author yancy
 */

/**
 * 一种一对多的依赖关系，多个观察者对象同时监听一个主题对象。
 * 这个主题对象在状态上发生变化时，会通知所有观察者对象，使它们能够自动更新自己。
 * 
 * 观察者模式中，观察者知道发布者是谁，并发布者保持对观察者进行记录。
 * 
 * 观察者模式大多是同步，如当事件触发，发布者就会去调用观察者的方法。
 */

class Observable {
    constructor() {
        this.observerList = [];
    }

    add(observer) {
        this.observerList.push(observer);
    }

    publish() {
        this.observerList.forEach(item => {
            if (item.sayName) {
                item.sayName(item.name);
            }
        });
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log('my name is ' + this.name);
    }
}

const $observable = new Observable();

const observerA = new Observer('A');

const observerB = new Observer('B');

$observable.add(observerA);
$observable.add(observerB);

$observable.publish();

//> "my name is A"
//> "my name is B"
