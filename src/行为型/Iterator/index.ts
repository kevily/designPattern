/**
 * @name 迭代器模式
 * @description 提供一种方法顺序访问一个聚合对象中各个元素, 而又无须暴露该对象的内部表示。
 */

class IteratorController {
    list: any[]
    index: number
    constructor(list: any[]) {
        this.list = list
        this.index = 0
    }
    hasNext() {
        return this.index < this.list.length
    }
    currentItem() {
        return this.list[this.index]
    }
    next() {
        this.index += 1
        if (this.hasNext()) {
            return true
        }
        return false
    }
}

const iteratorInstance = new IteratorController([{ name: '1' }, { name: '2' }, { name: '3' }])
do {
    console.log('currentItem', iteratorInstance.currentItem())
} while (iteratorInstance.next())
