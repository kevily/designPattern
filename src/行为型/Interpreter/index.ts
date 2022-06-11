/**
 * @name 解释器模式
 * @description 对传入的数据进行解析，并执行对应的逻辑
 */

interface InterpreterType {
    interpret(text: string): boolean
}

class ValueInterpreter implements InterpreterType {
    values: string[]
    constructor(values: string[]) {
        this.values = values
    }

    interpret(value: string) {
        return this.values.includes(value)
    }
}

class ExpressionInterpreter implements InterpreterType {
    left: ValueInterpreter
    right: ValueInterpreter
    constructor(left: ValueInterpreter, right: ValueInterpreter) {
        this.left = left
        this.right = right
    }

    interpret(value: string) {
        if (value.indexOf('+') === -1) {
            return false
        }

        const splitValue = value.split('+')

        return this.left.interpret(splitValue[0].trim()) && this.right.interpret(splitValue[1].trim())
    }
}

const terminal = new ValueInterpreter(['1', '2'])
const expressionInterpreter = new ExpressionInterpreter(terminal, terminal)

console.log(expressionInterpreter.interpret('1 + 1'))
console.log(expressionInterpreter.interpret('1 + 2'))
console.log(expressionInterpreter.interpret('1 + 3'))
console.log(expressionInterpreter.interpret('2 - 1'))
