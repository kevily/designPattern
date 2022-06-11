/**
 * @name 命令模式
 * @description 请求者与执行者分离，使系统可以灵活扩展
 */

interface ReceiverType {
    start(): void
    stop(): void
}
class Receiver implements ReceiverType {
    start() {
        console.log('启动系统。。。')
    }
    stop() {
        console.log('关闭系统。。。')
    }
}

interface CommandType {
    receiverInstance: ReceiverType
    execute(): void
}
class StartSystem implements CommandType {
    receiverInstance: ReceiverType
    constructor(receiverInstance: ReceiverType) {
        this.receiverInstance = receiverInstance
    }
    execute() {
        this.receiverInstance.start()
    }
}
class StopSystem implements CommandType {
    receiverInstance: ReceiverType
    constructor(receiverInstance: ReceiverType) {
        this.receiverInstance = receiverInstance
    }
    execute() {
        this.receiverInstance.stop()
    }
}

class Invoker {
    commandInstance: CommandType
    constructor(commandInstance: CommandType) {
        this.commandInstance = commandInstance
    }
    setCommand(commandInstance: CommandType) {
        this.commandInstance = commandInstance
    }
    action() {
        this.commandInstance.execute()
    }
}

const invokerInstance = new Invoker(new StartSystem(new Receiver()))
invokerInstance.action()
invokerInstance.setCommand(new StopSystem(new Receiver()))
invokerInstance.action()
