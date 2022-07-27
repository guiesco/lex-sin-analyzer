
const moo = require("moo")

const mooLex = moo.compile({
    def: "def",
    keyword: ['if', 'else', 'return', 'read', 'print', 'for', 'new', 'def', 'break'],
    type_keyword: ['int', 'bool', 'float', 'string'],
    boolean: ['true', 'false'],
    identifier: /[a-zA-Z_][a-zA-Z0-9_]*/,
    compare_keyword: ['<', '>', '<=', '>=', '!=', '=='],
    string: /"(?:[^"\\]|\\.)*"/,
    float: /(?:[0-9]*)?[.][0-9]+/,
    int: /[0-9]+/,
    lparan: '(',
    rparan: ')',
    times: '*',
    divide: '/',
    plus: '+',
    minus: '-',
    semicolon: ';',
    equals: '=',
    comma: ',',
    lbrace: '{',
    rbrace: '}',
    lbracket: '[',
    rbracket: ']',
    percentage: '%',
    whitespace: /[ \t]/,
    NL: { match: /\n/, lineBreaks: true },
})

module.exports = mooLex