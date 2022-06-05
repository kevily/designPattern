/**
 * @description 门面模式/外观模式
 * @description 使用一个中间件来合并零散的接口，降低调用者的心智负担
 */

class System {
    setType() {
        console.log('设置type')
    }
    setName() {
        console.log('设置name')
    }
    setMessage() {
        console.log('设置Message')
    }
}
const systemInstance = new System()
function facade() {
    systemInstance.setName()
    systemInstance.setMessage()
    systemInstance.setType()
}

facade()
