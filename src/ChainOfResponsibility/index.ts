/**
 * @name 职责链模式
 * @description 类似流水线一样把一套流程解耦，“产品”在整个流程中传递。
 */

function add(num: number) {
    return num + 1
}
function subtract(num: number) {
    return num - 1
}
function multiply(num: number) {
    return num * 2
}

class Controller {
    value: number = 0
    pipe(fn: (num: number) => number) {
        this.value = fn(this.value)
        return this
    }
}
const controllerInstance = new Controller()
controllerInstance.pipe(add).pipe(multiply).pipe(subtract)
console.log('result:', controllerInstance.value)
