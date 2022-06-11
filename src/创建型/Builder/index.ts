/**
 * @description 建造者模式
 * @description 简介: 各模块的构建过程应该是大同小异的，并且由构建者决定流程，构建细节允许差异，并且对构建者隐藏。
 */

abstract class Message {
    abstract message: string
    abstract type: string
    time: number = 0
    abstract setType(): void
    abstract setMessage(): void
    setTimer() {}
    abstract print(): void
}

class ErrorMessage extends Message {
    message = ''
    type = ''
    otherOperation() {
        // 额外操作
    }
    setMessage() {
        this.otherOperation()
        this.message = '失败'
    }
    setType() {
        this.type = 'error'
    }
    print() {
        console.log('ErrorMessage: type', this.type)
        console.log('ErrorMessage: message', this.message)
    }
}

class SuccessMessage extends Message {
    message = ''
    type = ''
    time = 0
    setMessage() {
        this.message = '成功'
    }
    setType() {
        this.type = 'success'
    }
    setTimer() {
        this.time = 1000
    }
    print() {
        console.log('SuccessMessage: type', this.type)
        console.log('SuccessMessage: time', this.time)
        console.log('SuccessMessage: message', this.message)
    }
}

function setMessage(message: Message) {
    message.setType()
    message.setTimer()
    message.setMessage()
    return message
}
setMessage(new ErrorMessage()).print()
setMessage(new SuccessMessage()).print()
