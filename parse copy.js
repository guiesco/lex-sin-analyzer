
const nearley = require("nearley");
const grammar = require("./finalGrammar.js");
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

        const parserResults = parser.results[0]
        const table = parser.table

        await fs.writeFile("result.json", JSON.stringify(parserResults, null, " "))
    } catch (e) {
        console.log("parse error", e.message)
    }
}

const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};

main()
    .catch(err => console.log(err.stack))