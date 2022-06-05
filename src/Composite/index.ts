/**
 * @description 组合模式
 * @description 所有的子孙系统都只负责自身的逻辑，最后逐级上报需要的信息，最后汇聚到顶层主系统。以此来降低主系统的复杂度
 */

interface treeNodeType {
    id: string
    name: string
    children?: treeNodeType[]
}

class School {
    treeList: treeNodeType[]
    constructor() {
        this.treeList = []
    }
    addCollege(college: treeNodeType) {
        this.treeList.push(college)
    }
}

class College {
    treeList: treeNodeType[]
    constructor() {
        this.treeList = []
    }
    addSpecialty(specialty: treeNodeType) {
        this.treeList.push(specialty)
    }
}

class Specialty {
    treeList: treeNodeType[]
    constructor() {
        this.treeList = []
    }
    addClass(classNode: treeNodeType) {
        this.treeList.push(classNode)
    }
}

const schoolInstance = new School()
const collegeInstance = new College()
const specialtyInstance = new Specialty()

// 专业逻辑
// ------------------------------------------------------------------------
specialtyInstance.addClass({
    id: 'class1',
    name: '班级1',
})
specialtyInstance.addClass({
    id: 'class2',
    name: '班级2',
})
// 学院逻辑
// ------------------------------------------------------------------------
collegeInstance.addSpecialty({
    id: 'specialty1',
    name: '专业1',
    children: specialtyInstance.treeList,
})
// 学校逻辑
// ------------------------------------------------------------------------
schoolInstance.addCollege({
    id: 'college1',
    name: '学院1',
    children: collegeInstance.treeList,
})

console.log('学校组织架构', schoolInstance.treeList)
