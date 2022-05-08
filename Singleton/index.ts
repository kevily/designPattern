/**
 * @description 单例模式
 * @description 简介: 模块无论被实例化几次，返回的都应该是同一个实例。
 */
class Singleton {
    static instance: any = null
    public a: number
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance
        }
        Singleton.instance = this
        this.a = 0
    }
    operate() {
        this.a = 1
    }
}

const a = new Singleton()
const b = new Singleton()
a.operate()

console.log('a === b', a === b)
console.log('a.a', a.a)
console.log('b.a', b.a)
