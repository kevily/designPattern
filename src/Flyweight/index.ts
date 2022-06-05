/**
 * @description 享元模式
 * @description 对于相同的对象期望返回相同的引用，以减少内存的占用.
 */

class System {
    type: string
    constructor(type: string) {
        this.type = type
    }
}

const cache: { [key: string]: System } = {}

function createSystem(type: string) {
    const newSystem = cache[type] || new System(type)
    cache[type] = newSystem
    return newSystem
}

const a1 = createSystem('a')
const a2 = createSystem('a')
const b1 = createSystem('b')

console.log('a1 === a2', a1 === a2)
console.log('a1 === b1', a1 === b1)
