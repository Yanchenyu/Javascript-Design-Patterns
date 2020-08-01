/**
 * @description 代理模式
 * @author yancy
 */

/**
 * 为其他对象提供一种代理，来控制这个对象的访问
 * 
 * 优点：
 * 职责单一且清晰。
    保护真实对象。
    开闭原则，高拓展性。

    缺点
    由于在客户端和真实对象间添加代理对象，导致请求处理速度变慢。
    实现代理模式需要额外工作，有些代理模式实现起来非常复杂。

    应用场景
    需要隐藏或保护某个类，则为这个类添加代理。
    需要给不同访问者提供不同权限，则在代理类上做判断。
    需要为某个类添加功能，如添加日志缓存等，我们可以在代理的类做添加，而不管去改原来封装好的类。
 */

let image = (function() {
    const node = document.createElement('img');
    document.body.appendChild(node);
    return {
        setSrc: function(src) {
            node.src = src;
        }
    }
})();

let proxy = (function() {
    const img = new Image();
    img.onload = function() {
        image.setSrc(this.src);
    }
    return {
        setSrc: function(src) {
            img.src = src;
            image.setSrc('home/loading.png');
        }
    }
})();

proxy.setSrc( 'home/img.jpg' );
