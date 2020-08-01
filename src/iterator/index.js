/**
 * @description 迭代器模式
 * @author yancy
 */

/**
 * 迭代器模式通常需要
 *   current: 返回当前迭代的位置
 *   next: 返回下一个，如果没有则返回null
 *   hasNext: 是否有下一个
 * 
 * 
 * 应用场景：
 *  1，访问一个聚合对象的内容而无须暴露它的内部表示。
    2，需要为聚合对象提供多种遍历方式。
    3，为遍历不同的聚合结构提供一个统一的接口。

 * 
 * 
 */



class Iterator {
    constructor(list) {
        // 需要迭代的数组
        this.list = list;
        // 当前位置
        this.currentIndex = 0;
    }

    next() {
        if (!hasNext) return null;
        this.currentIndex += 1;
        return this.list[this.currentIndex];
    }

    hasNext() {
        return this.currentIndex + 1 < this.list.length;
    }

    current() {
        return this.list[this.currentIndex]
    }
}

// 简易的迭代器模式 (forEach)

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(i, arr[i]);
    }
}
