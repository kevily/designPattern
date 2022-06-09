/**
 * @description 状态模式
 * @description 系统内部定义多套逻辑，根据状态自动切换逻辑
 */

interface systemType {
    start(): void
    stop(): void
}
class System1 implements systemType {
    setName() {
        console.log('System1: setName')
    }
    setType() {
        console.log('System1: setType')
    }
    setMessage() {
        console.log('System1: setMessage')
    }
    start(): void {
        this.setName()
        this.setType()
        this.setMessage()
        console.log('System1: started')
    }
    stop(): void {
        console.log('System1: stopped')
    }
}

class System2 implements systemType {
    setName() {
        console.log('System2: setName')
    }
    setType() {
        console.log('System2: setType')
    }
    start(): void {
        this.setName()
        this.setType()
        console.log('System2: started')
    }
    stop(): void {
        console.log('System2: stopped')
    }
}

class Client {
    systemList = {
        System1,
        System2,
    }
    systemInstance: systemType = new System1()
    switchSystem(type: keyof typeof this.systemList) {
        if (this.systemInstance) {
            this.systemInstance.stop()
        }
        this.systemInstance = new this.systemList[type]()
        this.start()
    }
    start() {
        this.systemInstance.start()
    }
}

const clientInstance = new Client()
clientInstance.start()
clientInstance.switchSystem('System2')
