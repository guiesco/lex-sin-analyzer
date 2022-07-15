
const nearley = require("nearley");
const grammar = require("./grammar.js");
const tokens = require("./tokens.js");
const fs = require("mz/fs");

async function main() {
    const input = (await fs.readFile("input.txt")).toString();
    let parser = new nearley.Parser(
        nearley.Grammar.fromCompiled(grammar),
        { keepHistory: true }
    )
    try {
        parser.feed(input)
        console.log(parser.results[0])
        console.log(parser.table)
    } catch (e) {
        console.log("parse error", e.message)
    }
}

main()
    .catch(err => console.log(err.stack))