/**
 * @description 原型模式
 * @description 简介：拷贝类的原型以及数据，规避初始化带来的时间成本
 */
class System {
    data: any[]
    constructor() {
        this.data = [] // 非常耗时的操作
    }
    set() {}
    get() {}
}
const system1 = new System()
// 克隆system1的数据与原型
const system2: System = Object.create(Object.getPrototypeOf(system1))
for (const [key, value] of Object.entries(system1)) {
    system2[key] = [...value] // 深克隆或者浅克隆都可
}

console.log('system1 === system2', system1 === system2)
console.log('system1.data === system2.data', system1.data === system2.data)
console.log('system1.get === system2.get', system1.get === system2.get)
