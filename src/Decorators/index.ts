/**
 * @description 装饰器模式
 * @description 简介：使用多个"包装器"包装旧系统，来创建多个薪的系统，并且不会影响到旧系统的运作。
 */

abstract class System {
    abstract start(): void
}

class ConciseSystem implements System {
    start() {
        console.log('系统启动')
    }
}

class Message implements System {
    SystemInstance: System
    constructor(SystemInstance: System) {
        this.SystemInstance = SystemInstance
    }
    start() {
        console.log('消息系统启动')
        this.SystemInstance.start()
    }
}

class Interceptor implements System {
    SystemInstance: System
    constructor(SystemInstance: System) {
        this.SystemInstance = SystemInstance
    }
    start() {
        console.log('拦截器启动')
        this.SystemInstance.start()
    }
}

new Interceptor(new Message(new ConciseSystem())).start()
