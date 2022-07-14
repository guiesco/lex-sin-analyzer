const moo = require("moo")
const nearley = require("nearley");
const grammar = require("./grammar.js");
const tokens = require("./tokens.js");
const fs = require("mz/fs");

const nm = require('nearley-moo').parser(nearley, grammar) // curried


async function main() {
    const input = (await fs.readFile("input.txt")).toString();
    let parser = nm(moo.compile(tokens))
    try {
        parser.feed(input)
        console.log(parser.results[0])
    } catch (e) {
        console.log("parse error", e.message)
    }
}

main()
    .catch(err => console.log(err.stack))