/**
 * @description 策略模式
 * @author yancy
 */

/**
 * 封装一系列算法，支持我们在运行时，使用相同接口，选择不同算法。它的目的是为了将算法的使用与算法的实现分离开来。
 * 策略模式通常会有两部分组成，一部分是策略类，它负责实现通用的算法，另一部分是环境类，它用户接收客户端请求并委托给策略类。
 * 
 * 
 * 优点：
 * 有效地避免多重条件选择语句；
    支持开闭原则，将算法独立封装，使得更加便于切换、理解和扩展；
    更加便于代码复用；

    缺点：
    策略类会增多；
    所有策略类都需要对外暴露；

 */


// 定义一个策略对象
let priceceStrategy = function(){
    // 内部算法对象 
    let strategy = {
      return30(price){
        return price + parseInt(price / 100) * 30
      },
      return50(price){
        return price + parseInt(price / 100) * 50
      },
      price80(price){
        return price  * 80 / 100
      },
      price90(price){
        return price  * 90 / 100
      }
    }
    // 策略方法调用接口
    return {
      strategyFunction(type, price) {
        return strategy[type] && strategy[type](price)
      },
      // 添加算法
      addStrategy(type, fn){
        strategy[type] = fn
      }
    }
  }()
  
  priceceStrategy.strategyFunction('return30', 100)   // 130
  priceceStrategy.strategyFunction('return50', 100)   // 150
  priceceStrategy.strategyFunction('price80', 100)    // 80
  priceceStrategy.strategyFunction('price90', 100)    // 90
  // 添加一个算法
  priceceStrategy.addStrategy('return70', (price) => {
    return price + parseInt(price / 100) * 70
  })
  console.log(priceceStrategy.strategyFunction('return70', 100))  // 170

