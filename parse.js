const nearley = require("nearley");
const grammar = require("./grammar.js");
const fs = require("mz/fs");

async function main() {
    const input = (await fs.readFile("input.txt")).toString();
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
    try {
        parser.feed(input)
        console.log(parser.results[0])
    } catch (e) {
        console.log("parse error", e.message)
    }
}

main()
    .catch(err => console.log(err.stack))