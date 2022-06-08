/**
 * @description 模板模式
 * @description 把复杂且通用的逻辑提取出来，以便于复用与扩展.
 */

function algorithm() {
    // ...复杂的逻辑
    console.log('algorithm')
}

function system1() {
    algorithm()
}

function system2() {
    algorithm()
}

system1()
system2()
