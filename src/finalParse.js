// autores
// Bruno Alexandre da Costa
// Gabriel V. V. Pacher
// Guilherme Escobar Lopes
// Heithor Marques

const nearley = require("nearley");
const grammar = require("./finalGrammar.js");
const fs = require("mz/fs");

async function main() {
    const input = (await fs.readFile("./test/input/input.lcc")).toString();
    let parser = new nearley.Parser(
        nearley.Grammar.fromCompiled(grammar))
    try {
        parser.feed(input)

        const parserResults = parser.results[0]
        const table = parser.table

        await fs.writeFile("./test/output/result.json", JSON.stringify(parserResults, null, " "))
    } catch (e) {
        console.log("parse error", e.message)
    }
}

main()
    .catch(err => console.log(err.stack))