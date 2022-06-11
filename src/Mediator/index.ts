/**
 * @name 中介者模式
 * @description 使用"中介者"进行解耦，让一对多转为一对一。
 */

interface CommonSystemType {
    mediatorInstance: MediatorType
    action(value?: string): void
}
interface MediatorType {
    add(key: string, systemInstance: CommonSystemType): void
    action(actionName: string, value: string): void
}

class Mediator implements MediatorType {
    list: { [key: string]: CommonSystemType }
    constructor() {
        this.list = {}
    }
    add(key: string, systemInstance: any) {
        this.list[key] = systemInstance
    }
    action(actionName: string, value: any) {
        this.list[actionName].action(value)
    }
}

interface SystemType extends CommonSystemType {
    sendMessage(): void
}
class System1 implements SystemType {
    mediatorInstance: MediatorType
    constructor(mediatorInstance: MediatorType) {
        this.mediatorInstance = mediatorInstance
    }
    sendMessage() {
        this.mediatorInstance.action('success', '成功')
    }
    action(value: string) {
        console.log(`执行System, 值为${value}`)
        this.sendMessage()
    }
}
class System2 implements SystemType {
    mediatorInstance: MediatorType
    constructor(mediatorInstance: MediatorType) {
        this.mediatorInstance = mediatorInstance
    }
    sendMessage() {
        this.mediatorInstance.action('error', '失败')
    }
    action(value: string) {
        console.log(`执行System, 值为${value}`)
        this.sendMessage()
    }
}

interface Message extends CommonSystemType {
    startSystem?(): void
}

class SuccessMessage implements Message {
    mediatorInstance: MediatorType
    constructor(mediatorInstance: MediatorType) {
        this.mediatorInstance = mediatorInstance
    }
    action(value?: string) {
        console.log(`执行SuccessMessage:`, value)
        this.startSystem()
    }
    startSystem() {
        this.mediatorInstance.action('System2', '发送失败的消息')
    }
}
class ErrorMessage implements Message {
    mediatorInstance: MediatorType
    constructor(mediatorInstance: MediatorType) {
        this.mediatorInstance = mediatorInstance
    }
    action(value?: string) {
        console.log(`执行ErrorMessage:`, value)
    }
}

const mediatorInstance = new Mediator()
mediatorInstance.add('System1', new System1(mediatorInstance))
mediatorInstance.add('System2', new System2(mediatorInstance))
mediatorInstance.add('success', new SuccessMessage(mediatorInstance))
mediatorInstance.add('error', new ErrorMessage(mediatorInstance))
mediatorInstance.action('System1', '发送成功的消息')
