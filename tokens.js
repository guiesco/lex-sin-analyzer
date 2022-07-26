
const moo = require("moo")

const mooLex = moo.compile({
    whitespace: /[ \t]/,
    boolean: ['true', 'false'],
    keyword: ['if', 'then', 'else'],
    type_keyword: ['int', 'bool', 'char', 'float', 'double'],
    type_modifier: ['short', 'long', 'signed', 'unsigned'],
    keyword: ['if', 'then', 'else', 'auto', 'break', 'case', 
        'const', 'continue', 'default', 'do',
        'else', 'enum', 'extern',
        'for',	'goto',	'if',
        'register',	'return',
        'sizeof',	'static',
        'struct',	'switch',	'typedef',	'union',
        'void',	'volatile',	'while'],
    identifier: /[a-zA-Z_][a-zA-Z0-9_]*/,
    lparan: '(',
    rparan: ')',
    times: '*',
    divide: '/',
    plus: '+',
    minus: '-',
    semicolon: ';',
    equals: '=',
    digit: /[0-9]/,
    number: /(?:(?:[+-])?[0-9]*[.])?[0-9]+/,
    string: /"(?:[^"\\]|\\.)*"/,
    comment: /\/\/.*/,
    punctuation: /[{}()\[\]]/,
    // operator: /[+\-*/%<>=&|!]/,
    // additive_sign: ['+', '-'],
    // multiplicative_sign: ['*', '/'],
    cNull: 'null',
    NL: { match: /\n/, lineBreaks: true },
    eof: 'eof'
})

module.exports = mooLex