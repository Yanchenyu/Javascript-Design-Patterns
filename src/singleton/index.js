/**
 * @description 单例模式-普通js
 * @author yancy
 */

var singleton = (function() {
    var instance;
    return function(context) {
        if (!instance) {
            instance = context;
        }
        return instance.name
    }
})();

var a = {
    name: 'A'
},
b = {
    name: 'B'
};

var aName = singleton(a),
    bName = singleton(b);

aName === bName;    // true
