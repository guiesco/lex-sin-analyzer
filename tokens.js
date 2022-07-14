module.exports = {
    whitespace: /[ \t]+/,
    boolean: ['true', 'false'],
    keyword: ['if', 'then', 'else'],
    identifier: /[a-zA-Z_][a-zA-Z0-9_]*/,
    number: /[0-9]+/,
    string: /"(?:[^"\\]|\\.)*"/,
    comment: /\/\/.*/,
    punctuation: /[{}()\[\]]/,
    operator: /[+\-*/%<>=&|!]/,
    NL: { match: /\n/, lineBreaks: true },
    eof: 'eof'
}