/**
 * @description 单例模式
 * @description 每次new出来的都应该是同一个实例，确保全局唯一性
 */
class Singletion {
    static instance = null
    public a: number
    constructor() {
        this.a = 0
        if (Singletion.instance) {
            return Singletion.instance
        } else {
            Singletion.instance = this
        }
    }
    operate() {
        this.a = 1
    }
}

const a = new Singletion()
const b = new Singletion()
a.operate()

console.log('a === b', a === b)
console.log('a.a', a.a)
console.log('b.a', b.a)
