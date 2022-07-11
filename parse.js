const nearley = require("nearley");
const grammar = require("./grammar.js");

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))

try{
    parser.feed("2")
    console.log("parse success", parser.results)
} catch (e) {
    console.log("parse error", e.message)
}

console.log(JSON.stringify(parser.results))