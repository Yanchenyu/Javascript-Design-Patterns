/**
 * @description 单例模式
 * @author yancy
 */

/**
 * 单例模式只允许实例化一次，能提高对象访问速度并且节约内存，通常被用于下面场景：

    需要频繁创建再销毁的对象，或频繁使用的对象：如：弹窗，文件；
    常用的工具类对象；
    常用的资源消耗大的对象；
 */

var Singleton = function (name) {
    this.name = name;
}

Singleton.prototype.getName = function () {
    console.log(this.name);
}

Singleton.getInstance = (function(){
        var instance = null;
        // 利用闭包，保留了instance私有变量不被销毁
        return function(name){
            if(!instance){
                instance = new Singleton(name);
            }
            return instance;
        }
    }
)()

var a = Singleton.getInstance('alan1');
var b = Singleton.getInstance('alan2');

console.log(a===b); //true

// ES6写法

class Singleton {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }
    getName() {
        return this.name
    }
    static getInstance(name) {
        if (!this.instance) {
            this.instance = new Singleton(name);
        }
        return this.instance;
    }
}
