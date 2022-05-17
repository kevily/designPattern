/**
 * @description 代理模式
 * @description 简介：使用一个"中间人"来代理对象，以确保在原功能和行为不被破坏对其进行扩展，改变行为。经典案例：js原生Proxy
 */

const personInfo = {
    id: 'Id',
    name: 'Name',
}
type personInfoType = typeof personInfo
// 静态代理
// ------------------------------------------------------------------------
class PersonProxy {
    private _personInfo: personInfoType
    constructor(personInfo: personInfoType) {
        this._personInfo = personInfo
    }
    get id() {
        try {
            console.log('人员id: ', this._personInfo.id)
            return this._personInfo.id
        } catch (e) {
            console.log('人员id获取失败')
            return ''
        }
    }
    get name() {
        try {
            console.log('人员名字: ', this._personInfo.name)
            return this._personInfo.name
        } catch (e) {
            console.log('人员名字获取失败')
            return ''
        }
    }
    get personInfo() {
        return this._personInfo
    }
}
const proxyInstance = new PersonProxy(personInfo)
console.log('静态代理-PersonProxy:')
console.log(proxyInstance.id, proxyInstance.name, proxyInstance.personInfo)

// 动态代理
// ------------------------------------------------------------------------
interface handlerType<T extends object> {
    get(obj: T, key: keyof T): any
    set(obj: T, key: keyof T, value: any): void
}
interface DynamicProxyConstructor {
    new <T extends object>(instance: T, handler: handlerType<T>): T
}
const DynamicProxy = class DynamicProxy {
    constructor(instance: any, handler: any) {
        for (const key in instance) {
            ;(this as any)[key] = instance[key]
            Object.defineProperty(this, key, {
                get() {
                    return handler.get(instance, key)
                },
                set(v) {
                    handler.set(instance, key, v)
                },
            })
        }
    }
} as DynamicProxyConstructor

const proxyObj = new DynamicProxy(personInfo, {
    get(obj, key) {
        return obj[key] + '-get'
    },
    set(obj, key, value) {
        if (typeof value === 'string') {
            obj[key] = value
        }
        throw new Error('值必须为string类型')
    },
})
console.log('动态代理:')
console.log('proxyObj.id', proxyObj.id)
console.log('proxyObj.name', proxyObj.name)
// proxyObj.id = [] as any  => throw new Error('值必须为string类型')
