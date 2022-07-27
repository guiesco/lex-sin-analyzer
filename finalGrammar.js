// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const tokens = require('./tokens.js')
const symbolTable = {}

const normalizeData = (data) => {
    const returnData = []
    data.forEach(function(token) {
        if (!token) return;
        if (typeof token.type === "string") {
            returnData.push(token.type)
        } else if(Array.isArray(token)) {
            returnData.push(...token)
        } else {
            returnData.push(token)
        }
    })
    return returnData
}
var grammar = {
    Lexer: tokens,
    ParserRules: [
    {"name": "program$ebnf$1", "symbols": ["statement"], "postprocess": id},
    {"name": "program$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "program", "symbols": ["program$ebnf$1"], "postprocess": (data) => [data[0], symbolTable]},
    {"name": "program$ebnf$2", "symbols": ["funclist"], "postprocess": id},
    {"name": "program$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "program", "symbols": ["program$ebnf$2"], "postprocess": (data) => [data[0], symbolTable]},
    {"name": "funclist", "symbols": ["funcdef", "funclist"], "postprocess": data => normalizeData(data)},
    {"name": "funclist", "symbols": ["funcdef"], "postprocess": id},
    {"name": "funcdef$ebnf$1", "symbols": ["paramlist"], "postprocess": id},
    {"name": "funcdef$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "funcdef", "symbols": [(tokens.has("def") ? {type: "def"} : def), "_", "identifier", "_", (tokens.has("lparan") ? {type: "lparan"} : lparan), "_", "funcdef$ebnf$1", "_", (tokens.has("rparan") ? {type: "rparan"} : rparan), "NL", "_", (tokens.has("lbrace") ? {type: "lbrace"} : lbrace), "NL", "_", "statelist", "NL", "_", (tokens.has("rbrace") ? {type: "rbrace"} : rbrace), "NL", "_"], "postprocess": data => normalizeData(data)},
    {"name": "paramlist", "symbols": ["type_keyword", "_", "identifier", "_", (tokens.has("comma") ? {type: "comma"} : comma), "_", "paramlist"], "postprocess": data => normalizeData(data)},
    {"name": "paramlist$ebnf$1", "symbols": ["identifier"], "postprocess": id},
    {"name": "paramlist$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "paramlist", "symbols": ["type_keyword", "_", "paramlist$ebnf$1"], "postprocess": data => normalizeData(data)},
    {"name": "statelist$ebnf$1", "symbols": ["statelist"], "postprocess": id},
    {"name": "statelist$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "statelist", "symbols": ["statement", "statelist$ebnf$1"], "postprocess": data => normalizeData(data)},
    {"name": "statement", "symbols": ["_", "vardecl", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": data => normalizeData(data)},
    {"name": "statement", "symbols": ["_", "atribstat", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": data => normalizeData(data)},
    {"name": "statement", "symbols": ["_", "printstat", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": data => normalizeData(data)},
    {"name": "statement", "symbols": ["_", "readstat", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": data => normalizeData(data)},
    {"name": "statement", "symbols": ["_", "returnstat", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": data => normalizeData(data)},
    {"name": "statement", "symbols": ["_", "ifstat", "NL"], "postprocess": data => normalizeData(data)},
    {"name": "statement", "symbols": ["_", "forstat", "NL"], "postprocess": data => normalizeData(data)},
    {"name": "statement", "symbols": ["_", (tokens.has("lbrace") ? {type: "lbrace"} : lbrace), "NL", "statelist", "_", (tokens.has("rbrace") ? {type: "rbrace"} : rbrace), "NL"], "postprocess": data => normalizeData(data)},
    {"name": "statement", "symbols": ["_", {"literal":"break"}, (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": data => normalizeData(data)},
    {"name": "statement", "symbols": ["_", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": data => normalizeData(data)},
    {"name": "vardecl$ebnf$1", "symbols": []},
    {"name": "vardecl$ebnf$1$subexpression$1", "symbols": [(tokens.has("lbracket") ? {type: "lbracket"} : lbracket), (tokens.has("digit") ? {type: "digit"} : digit), (tokens.has("rbracket") ? {type: "rbracket"} : rbracket)]},
    {"name": "vardecl$ebnf$1", "symbols": ["vardecl$ebnf$1", "vardecl$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "vardecl", "symbols": ["type_keyword", "_", "identifier", "_", "vardecl$ebnf$1"], "postprocess":  data => {
        data[4] = normalizeData(normalizeData(data[4]))
        return normalizeData(data)} },
    {"name": "vardecl", "symbols": ["type_keyword", "_", "atribstat"], "postprocess":  data => {
            return normalizeData(data)
        } },
    {"name": "atribstat", "symbols": ["lvalue", (tokens.has("equals") ? {type: "equals"} : equals), "_", "expression"], "postprocess": data => normalizeData(data)},
    {"name": "atribstat", "symbols": ["lvalue", (tokens.has("equals") ? {type: "equals"} : equals), "_", "allocexpression"], "postprocess": data => normalizeData(data)},
    {"name": "atribstat", "symbols": ["lvalue", (tokens.has("equals") ? {type: "equals"} : equals), "_", "funccall"], "postprocess": data => normalizeData(data)},
    {"name": "funccall", "symbols": ["identifier", "_", (tokens.has("lparan") ? {type: "lparan"} : lparan), "_", "paramlistcall", "_", (tokens.has("rparan") ? {type: "rparan"} : rparan)], "postprocess": data => normalizeData(data)},
    {"name": "paramlistcall$ebnf$1$subexpression$1", "symbols": ["identifier", "_", (tokens.has("comma") ? {type: "comma"} : comma), "_", "paramlistcall", "_"]},
    {"name": "paramlistcall$ebnf$1$subexpression$1", "symbols": ["identifier"]},
    {"name": "paramlistcall$ebnf$1", "symbols": ["paramlistcall$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "paramlistcall$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "paramlistcall", "symbols": ["paramlistcall$ebnf$1"], "postprocess": data => normalizeData(normalizeData(data))},
    {"name": "printstat", "symbols": [{"literal":"print"}, "_", "expression"], "postprocess": data => normalizeData(data)},
    {"name": "readstat", "symbols": [{"literal":"read"}, "_", "lvalue"], "postprocess": data => normalizeData(data)},
    {"name": "returnstat", "symbols": ["_", {"literal":"return"}, "_"], "postprocess": data => data[1] = data[1].value},
    {"name": "ifstat$ebnf$1$subexpression$1", "symbols": ["_", {"literal":"else"}, "_", "statelist"]},
    {"name": "ifstat$ebnf$1", "symbols": ["ifstat$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "ifstat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ifstat", "symbols": [{"literal":"if"}, "_", (tokens.has("lparan") ? {type: "lparan"} : lparan), "_", "expression", "_", (tokens.has("rparan") ? {type: "rparan"} : rparan), "_", "statement", "ifstat$ebnf$1"], "postprocess": data => normalizeData(data)},
    {"name": "forstat", "symbols": [{"literal":"for"}, "_", (tokens.has("lparan") ? {type: "lparan"} : lparan), "atribstat", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "expression", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "atribstat", (tokens.has("rparan") ? {type: "rparan"} : rparan), "statement"]},
    {"name": "allocexpression$ebnf$1$subexpression$1", "symbols": [(tokens.has("lbracket") ? {type: "lbracket"} : lbracket), "numexpression", (tokens.has("rbracket") ? {type: "rbracket"} : rbracket)]},
    {"name": "allocexpression$ebnf$1", "symbols": ["allocexpression$ebnf$1$subexpression$1"]},
    {"name": "allocexpression$ebnf$1$subexpression$2", "symbols": [(tokens.has("lbracket") ? {type: "lbracket"} : lbracket), "numexpression", (tokens.has("rbracket") ? {type: "rbracket"} : rbracket)]},
    {"name": "allocexpression$ebnf$1", "symbols": ["allocexpression$ebnf$1", "allocexpression$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "allocexpression", "symbols": [{"literal":"new"}, "_", "type_keyword", "allocexpression$ebnf$1"], "postprocess": data => normalizeData(data)},
    {"name": "expression", "symbols": ["numexpression"], "postprocess": data => normalizeData(data)},
    {"name": "expression", "symbols": ["numexpression", (tokens.has("compare_keyword") ? {type: "compare_keyword"} : compare_keyword), "numexpression"], "postprocess": data => normalizeData(data)},
    {"name": "numexpression", "symbols": ["term"], "postprocess": data => normalizeData(data)},
    {"name": "numexpression$subexpression$1", "symbols": [(tokens.has("plus") ? {type: "plus"} : plus)]},
    {"name": "numexpression$subexpression$1", "symbols": [(tokens.has("minus") ? {type: "minus"} : minus)]},
    {"name": "numexpression", "symbols": ["term", "_", "numexpression$subexpression$1", "_", "numexpression"], "postprocess":  data => {
            data[2] = data[2][0].type
            return normalizeData(data)
        } },
    {"name": "term$ebnf$1", "symbols": []},
    {"name": "term$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("times") ? {type: "times"} : times)]},
    {"name": "term$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("divide") ? {type: "divide"} : divide)]},
    {"name": "term$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("percentage") ? {type: "percentage"} : percentage)]},
    {"name": "term$ebnf$1$subexpression$1", "symbols": ["term$ebnf$1$subexpression$1$subexpression$1", "_", "unaryexpr"]},
    {"name": "term$ebnf$1", "symbols": ["term$ebnf$1", "term$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "term", "symbols": ["unaryexpr", "_", "term$ebnf$1"], "postprocess":  data => {
            data[2] = normalizeData(normalizeData(normalizeData(data[2])))
            return normalizeData(data)
        } },
    {"name": "unaryexpr$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("plus") ? {type: "plus"} : plus)]},
    {"name": "unaryexpr$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("minus") ? {type: "minus"} : minus)]},
    {"name": "unaryexpr$ebnf$1$subexpression$1", "symbols": ["unaryexpr$ebnf$1$subexpression$1$subexpression$1"]},
    {"name": "unaryexpr$ebnf$1", "symbols": ["unaryexpr$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "unaryexpr$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unaryexpr", "symbols": ["unaryexpr$ebnf$1", "_", "factor"], "postprocess": data => normalizeData(data)},
    {"name": "factor", "symbols": [(tokens.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "factor", "symbols": [(tokens.has("digit") ? {type: "digit"} : digit)], "postprocess": id},
    {"name": "factor", "symbols": [(tokens.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "factor", "symbols": [], "postprocess": () => null},
    {"name": "factor", "symbols": ["lvalue"], "postprocess": data => normalizeData(data)},
    {"name": "factor", "symbols": [(tokens.has("lparan") ? {type: "lparan"} : lparan), "numexpression", (tokens.has("rparan") ? {type: "rparan"} : rparan)], "postprocess": data => normalizeData(data)},
    {"name": "lvalue$ebnf$1", "symbols": []},
    {"name": "lvalue$ebnf$1$subexpression$1", "symbols": [(tokens.has("lbracket") ? {type: "lbracket"} : lbracket), "numexpression", (tokens.has("rbracket") ? {type: "rbracket"} : rbracket), "_"]},
    {"name": "lvalue$ebnf$1", "symbols": ["lvalue$ebnf$1", "lvalue$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "lvalue", "symbols": ["identifier", "_", "lvalue$ebnf$1"], "postprocess":  data => {
            data[2] = normalizeData(normalizeData(data[2]))
        return normalizeData(data)} },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (tokens.has("whitespace") ? {type: "whitespace"} : whitespace)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": data => data[0][0] ? 'WS' : ''},
    {"name": "NL$ebnf$1", "symbols": []},
    {"name": "NL$ebnf$1", "symbols": ["NL$ebnf$1", (tokens.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "NL", "symbols": ["NL$ebnf$1"], "postprocess": () => "NL"},
    {"name": "type_keyword", "symbols": [(tokens.has("type_keyword") ? {type: "type_keyword"} : type_keyword)], "postprocess": (data) => data[0].value},
    {"name": "identifier", "symbols": [(tokens.has("identifier") ? {type: "identifier"} : identifier)], "postprocess":  
        data => {
            const identifierInfo = data[0]
            symbolTable[identifierInfo.value] = data[0]
            return identifierInfo.type
        } 
            }
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
