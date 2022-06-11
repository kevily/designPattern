/**
 * @name 备忘录模式
 * @description 在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。
 */

interface logMementoType {
    message: string
    time: number
}

interface MementoType {
    state: logMementoType
    getState(): logMementoType
    setState(state: logMementoType): void
}

class Memento implements MementoType {
    state: logMementoType
    constructor() {
        this.state = {
            message: '',
            time: 0,
        }
    }
    getState() {
        return this.state
    }
    setState(state: logMementoType) {
        this.state = state
    }
}

class Caretaker {
    mementoList: MementoType[]
    currentIndex: number
    constructor() {
        this.mementoList = []
        this.currentIndex = 0
    }
    restore() {
        if (this.currentIndex < 0) {
            return void 0
        }
        return this.mementoList[this.currentIndex--]
    }
    next() {
        if (this.mementoList.length >= this.currentIndex + 1) {
            return this.mementoList[this.mementoList.length]
        }
        return this.mementoList[++this.currentIndex]
    }
    add(mementoInstance: MementoType) {
        this.mementoList.push(mementoInstance)
        this.currentIndex += 1
    }
}

class Log {
    private message: string
    constructor() {
        this.message = ''
    }
    backup() {
        const mementoInstance = new Memento()
        mementoInstance.setState({
            message: this.message,
            time: Date.now(),
        })
        return mementoInstance
    }
    restore(caretakerInstance: Caretaker) {
        const mementoInstance = caretakerInstance.restore()
        if (mementoInstance) {
            this.setMessage(mementoInstance.getState().message)
        }
    }
    setMessage(message: string) {
        this.message = message
    }
    getMessage() {
        return this.message
    }
}

const logInstance = new Log()
const caretakerInstance = new Caretaker()
logInstance.setMessage('2')
caretakerInstance.add(logInstance.backup())
console.log('caretakerInstance.mementoList', caretakerInstance.mementoList)
console.log('caretakerInstance.currentIndex', caretakerInstance.currentIndex)

logInstance.setMessage('3')
caretakerInstance.add(logInstance.backup())
console.log('caretakerInstance.mementoList', caretakerInstance.mementoList)
console.log('caretakerInstance.currentIndex', caretakerInstance.currentIndex)

logInstance.restore(caretakerInstance)
console.log('caretakerInstance.mementoList', caretakerInstance.mementoList)
console.log('caretakerInstance.currentIndex', caretakerInstance.currentIndex)
console.log('message', logInstance.getMessage())
