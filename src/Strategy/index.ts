/**
 * @description 策略模式
 * @description 解耦多套相关的系统，并有一个中间件根据需求进行切换对应系统。便于扩展。
 */

interface SystemType {
    print(): void
}

class System1 implements SystemType {
    print() {
        console.log('System1')
    }
}
class System2 implements SystemType {
    print() {
        console.log('System2')
    }
}

class Controller {
    systemInstanceList: { [key: string]: SystemType } = {}
    addSystem(key: string, systemInstance: SystemType) {
        this.systemInstanceList[key] = systemInstance
    }
    print(type: string) {
        this.systemInstanceList[type].print()
    }
}
const controllerInstance = new Controller()
controllerInstance.addSystem('system1', new System1())
controllerInstance.addSystem('system2', new System2())
controllerInstance.print('system1')
