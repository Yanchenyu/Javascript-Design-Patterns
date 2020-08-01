/**
 * @description 中介者模式
 * @author yancy
 */

/**
 * 中介者模式是迎合迪米特法则的一种实现。
 * 迪米特法则也叫最少知识原则，是指一个对象应该尽可能少地了解另外的对象（类似不和陌生人说话）。
 * 如果对象之间的耦合性太高，一个对象发生改变之后，难免会影响到其他的对象。
 * 而在中介者模式里，对象之间几乎不知道彼此的存在，它们只能通过中介者对象来互相影响对方。
 * 
 * 降低多个对象和类之间的通信复杂性，促进形成松耦合，提高可维护性。
 * 
 * 优点
    降低类的复杂度，从一对多转成一对一。
    为各个类之间解耦。
    提高代码可维护性。

   缺点
    中介者会越来越庞大，变得难以维护。

    案例：
    MVC 框架，其中C（控制器）就是 M（模型）和 V（视图）的中介者。
 */

const player = function (name) {
    this.name = name
    playerMiddle.add(name)
}

player.prototype.win = function () {
    playerMiddle.win(this.name)
}

player.prototype.lose = function () {
    playerMiddle.lose(this.name)
}

const playerMiddle = (function () { // 将就用下这个 demo，这个函数当成中介者
    const players = []
    const winArr = []
    const loseArr = []
    return {
        add: function (name) {
            players.push(name)
        },
        win: function (name) {
            winArr.push(name)
            if (winArr.length + loseArr.length === players.length) {
                this.show()
            }
        },
        lose: function (name) {
            loseArr.push(name)
            if (winArr.length + loseArr.length === players.length) {
                this.show()
            }
        },
        show: function () {
            for (let winner of winArr) {
                console.log(winner + '挑战成功;')
            }
            for (let loser of loseArr) {
                console.log(loser + '挑战失败;')
            }
        },
    }
}())

const a = new player('A 选手')
const b = new player('B 选手')
const c = new player('C 选手')

a.win()
b.win()
c.lose()

  // A 选手挑战成功;
  // B 选手挑战成功;
  // C 选手挑战失败;
