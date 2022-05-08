// 配置文档: https://prettier.io/docs/en/options.html
// ----------------------------------------------------------------------
module.exports = {
    overrides: [
        {
            files: '.prettierrc',
            options: { parser: 'json' },
        },
    ],
    printWidth: 120,
    tabWidth: 4,
    useTabs: false,
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: true,
    jsxBracketSameLine: true,
    htmlWhitespaceSensitivity: 'ignore',
    arrowParens: 'always',
    rangeStart: 0,
}
