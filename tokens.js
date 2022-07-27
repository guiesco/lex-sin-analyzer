
const moo = require("moo")

const mooLex = moo.compile({
    whitespace: /[ \t]/,
    boolean: ['true', 'false'],
    def: "def",
    keyword: ['if', 'else', 'return', 'read', 'print', 'for', 'new', 'def', 'break'],
    type_keyword: ['int', 'bool', 'float', 'string'],
    identifier: /[a-zA-Z_][a-zA-Z0-9_]*/,
    compare_keyword: ['<', '>', '<=', '>=', '!=', '=='],
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
    digit: /[0-9]/,
    number: /(?:(?:[+-])?[0-9]*[.])?[0-9]+/,
    string: /"(?:[^"\\]|\\.)*"/,
    comment: /\/\/.*/,
    punctuation: /[{}()\[\]]/,
    cNull: 'null',
    NL: { match: /\n/, lineBreaks: true },
    eof: 'eof'
})

module.exports = mooLex