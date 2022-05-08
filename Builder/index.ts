/**
 * @description 建造者模式
 * @description 建造者模式解耦了沟构造器与构建逻辑，规范了的构建过程，后续新增同类功能只需要添加对应的构建逻辑即可
 * @description 各个功能应该是同类，构建过程是一致的，最后由构造器进行构建
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

function setMessage(builder: Message) {
    builder.setType()
    builder.setTimer()
    builder.setMessage()
    return builder
}
setMessage(new ErrorMessage()).print()
setMessage(new SuccessMessage()).print()
