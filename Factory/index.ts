/**
 * @description 工厂模式
 * @description 工厂模式隐藏了各个功能的构建细节，创建器并不需要知道各个功能的构建过程，完全由其自身决定
 */

const factories = {
    personInfo() {
        // 省略构建过程
        return {
            name: '2131',
            age: 2,
        }
    },
    config() {
        // 省略构建过程
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

// 结合依赖注入
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
