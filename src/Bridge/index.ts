/**
 * @description 桥接模式
 * @description 简介：把抽象(或者基础能力等)与实现(或业务等)分离，使他们各自独立，用"桥"把它们任意组合，保证整个系统具备高扩展性，高灵活性。
 */

interface MessageType {
    message: string
    type: string
}

class MessageA implements MessageType {
    message = '消息A'
    type = 'messageA'
}
class MessageB implements MessageType {
    message = '消息B'
    type = 'messageB'
}

interface SystemType {
    /** 桥 */
    messageInstance: MessageType
    type: string
    getMessage(): MessageType['message']
}
class SystemA implements SystemType {
    messageInstance: MessageType
    type: string
    constructor(messageInstance: MessageType) {
        this.messageInstance = messageInstance
        this.type = 'SystemA'
    }
    getMessage() {
        return this.messageInstance.message
    }
}
class SystemB implements SystemType {
    messageInstance: MessageType
    type: string
    constructor(messageInstance: MessageType) {
        this.messageInstance = messageInstance
        this.type = 'SystemB'
    }
    getMessage() {
        return this.messageInstance.message
    }
}
const systemA_messageA = new SystemA(new MessageA())
const systemA_messageB = new SystemA(new MessageB())
const systemB_messageA = new SystemB(new MessageA())
const systemB_messageB = new SystemB(new MessageB())
console.log('systemA_messageA:', systemA_messageA.getMessage())
console.log('systemA_messageB:', systemA_messageB.getMessage())
console.log('systemB_messageA:', systemB_messageA.getMessage())
console.log('systemB_messageB:', systemB_messageB.getMessage())
