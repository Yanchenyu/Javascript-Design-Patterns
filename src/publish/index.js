/**
 * @description 发布订阅模式
 * @author yancy
 */

/**
 * 观察者模式和发布订阅模式的区别：
 * 
 * 
 * 
 *  1，观察者模式中，观察者知道发布者是谁，并发布者保持对观察者进行记录。而发布订阅模式中，发布者和订阅者不知道对方的存在。它们只是通过调度中心进行通信。
    
    2，发布订阅模式中，组件是松散耦合的，正好和观察者模式相反。
 
    3，观察者模式大多是同步，如当事件触发，发布者就会去调用观察者的方法。而发布订阅模式大多是异步的（使用消息队列）。
 
    4，观察者模式需要在单个应用程序地址空间中实现，而发布-订阅更像交叉应用模式。
 */

class Subject {
    constructor() {
        this.subject = {};
    }

    hasSubject(key) {
        return !!this.subject[key]
    }

    subscribe(key, fn) {
        if (!this.hasSubject(key)) {
            this.subject[key] = [];
        }
        this.subject[key].push(fn);
    }

    unsubscribe(key) {
        if (this.hasSubject(key)) {
            delete this.subject[key]
        }
    }

    publish(key, ...args) {
        if (this.hasSubject(key)) {
            this.subject[key].forEach(item => {
                item(...args);
            });
        }
    }
}

const subject = new Subject();

subject.subscribe('onwork', time => {
    console.log(`上班了：${time}`);
});
subject.subscribe('onwork', time => {
    console.log(`打卡了：${time}`);
});
subject.subscribe('launch', time => {
    console.log(`吃饭了：${time}`);
});

subject.publish('onwork', '07:10');

// 取消订阅
subject.unsubscribe('onwork');

// 不再接收消息
subject.publish('onwork', '07:20');

subject.publish('launch', '11:20');
