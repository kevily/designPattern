/**
 * @description 观察者模式/发布订阅模式
 * @description 让多个系统监听某个系统的某个功能，一旦这个功能更新，将由被监听者通知各个系统。让各个系统根据更新执行自身对应的逻辑。
 */

class Observer {
    list: { [key: string]: Function }
    constructor() {
        this.list = {}
    }
    addObserver(key: string, task: Function) {
        this.list[key] = task
    }
    delObserver(key: string) {
        delete this.list[key]
    }
    clearObserver() {
        this.list = {}
    }
    notify(arg?: any) {
        Object.values(this.list).forEach((fn) => {
            fn?.(arg)
        })
    }
}
class Controller {
    observerInstance: Observer
    constructor(observerInstance: Observer) {
        this.observerInstance = observerInstance
    }
    notify() {
        this.observerInstance.notify(Date.now())
    }
}

class System1 {
    public updater = (time: string | number) => {
        console.log('System1:updater', time)
    }
}
class System2 {
    public updater = (time: string | number) => {
        console.log('System2:updater', time)
    }
}

const system1Instance = new System1()
const system2Instance = new System2()
const observerInstance = new Observer()
const controllerInstance = new Controller(observerInstance)
observerInstance.addObserver('system1', system1Instance.updater)
observerInstance.addObserver('system2', system2Instance.updater)

controllerInstance.notify()
