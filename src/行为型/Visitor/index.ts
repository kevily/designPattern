/**
 * @name 访问者模式
 * @desciprt 在不破坏被访问者的逻辑的前提下, 让访问者有权限侵入被访问者的内部。
 */

interface LeaderType {
    list: any[]
    visitClass(classInstance: ClassType): void
}
abstract class ClassType {
    abstract name: string
    abstract getStudentNum(): number
    accept(visitorInstance: LeaderType) {
        console.log(`${this.name}被访问了`)
        visitorInstance.visitClass(this)
    }
}
class Class1 extends ClassType {
    name: string
    constructor() {
        super()
        this.name = '班级1'
    }
    getStudentNum(): number {
        return 1
    }
}
class Class2 extends ClassType {
    name: string
    constructor() {
        super()
        this.name = '班级2'
    }
    getStudentNum(): number {
        return 2
    }
}

class Leader implements LeaderType {
    list: any[] = []
    visitClass(classInstance: ClassType): void {
        console.log(`访问了${classInstance.name}`)
        this.list.push(classInstance.getStudentNum())
    }
}

const leaderInstance = new Leader()
const class1Instance = new Class1()
const class2Instance = new Class2()
leaderInstance.visitClass(class1Instance)
class2Instance.accept(leaderInstance)
console.log('leaderInstance.list', leaderInstance.list)
