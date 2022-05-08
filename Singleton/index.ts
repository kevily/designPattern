/**
 * @description 单例模式
 * @description 在需要确保某个功能的全局唯一性时，可使用单例模式
 */
class Singletion {
    static instance: any = null
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
