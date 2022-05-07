/**
 * @description 工厂模式
 * @description 多个不相关的功能需要按某种逻辑进行初始化等操作，可使用工厂模式进行解耦
 */

const factories = {
    personInfo() {
        return {
            name: '2131',
            age: 2,
        }
    },
    config() {
        return {
            serviceHost: 'http',
            env: 'dev',
        }
    },
}
// 简单工厂
// ----------------------------------------------------------------------
function factory(type: keyof typeof factories) {
    return factories[type]()
}
console.log('personInfo', factory('personInfo'))
console.log('config', factory('config'))

// 依赖注入
// ----------------------------------------------------------------------
class Factory {
    private tasks: { [key: string]: () => void } = {}
    registry(name: string, fn: () => void) {
        this.tasks[name] = fn
    }
    create(name: string) {
        if (this.tasks.hasOwnProperty(name)) {
            return this.tasks[name]()
        }
    }
}
const factory2 = new Factory()
factory2.registry('personInfo', factories.personInfo)
factory2.registry('config', factories.config)

console.log('personInfo2', factory2.create('personInfo'))
console.log('config2', factory2.create('config'))
