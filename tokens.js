
const moo = require("moo")

const mooLex = moo.compile({
    whitespace: /[ \t]+/,
    boolean: ['true', 'false'],
    keyword: ['if', 'then', 'else'],
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