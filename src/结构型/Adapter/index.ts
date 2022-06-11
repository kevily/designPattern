/**
 * @description 适配器模式
 * @description 简介： 使用"适配器"来让旧系统的功能兼容某一个功能，而不影响其他使用旧系统功能的部分。
 */
abstract class SystemType {
    abstract run(message: string, Interceptor?: Function): void
}

class System implements SystemType {
    run(message: string, Interceptor: Function) {
        if (message) {
            console.log('message', message)
        }
        if (Interceptor) {
            console.log('拦截器启动')
        }
    }
}

class NewSystem implements SystemType {
    oldSystemInstance: System
    constructor(oldSystemInstance: System) {
        this.oldSystemInstance = oldSystemInstance
    }
    run(message: string) {
        this.oldSystemInstance.run(message, () => {})
    }
}

const newSystemInstance = new NewSystem(new System())
newSystemInstance.run('111')
