
const moo = require("moo")

const mooLex = moo.compile({
    whitespace: /[ \t]/,
    boolean: ['true', 'false'],
    keyword: ['if', 'then', 'else', 'auto', 'break', 'case', 'char',
        'const', 'continue', 'default', 'do',
        'double', 'else', 'enum', 'extern',
        'float',	'for',	'goto',	'if',
        'int',	'long',	'register',	'return',
        'short',	'signed',	'sizeof',	'static',
        'struct',	'switch',	'typedef',	'union',
        'unsigned',	'void',	'volatile',	'while'],
    identifier: /[a-zA-Z_][a-zA-Z0-9_]*/,
    number: /(?:(?:[+-])?[0-9]*[.])?[0-9]+/,
    string: /"(?:[^"\\]|\\.)*"/,
    comment: /\/\/.*/,
    punctuation: /[{}()\[\]]/,
    operator: /[+\-*/%<>=&|!]/,
    cNull: 'null',
    NL: { match: /\n/, lineBreaks: true },
    eof: 'eof'
})

module.exports = mooLex