// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const tokens = require('./tokens.js')
const symbolTable = {}

const normalizeData = (data) => {
    const returnData = []
    if (!data) return 
    if(!Array.isArray(data)) return
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
    {"name": "program", "symbols": ["program$ebnf$1"], "postprocess": (data) => ({tokens: data[0], symbolTable})},
    {"name": "program$ebnf$2", "symbols": ["funclist"], "postprocess": id},
    {"name": "program$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "program", "symbols": ["program$ebnf$2"], "postprocess": (data) => ({tokens: data[0], symbolTable})},
    {"name": "funclist$ebnf$1", "symbols": ["funclist"], "postprocess": id},
    {"name": "funclist$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "funclist", "symbols": ["funcdef", "funclist$ebnf$1"], "postprocess": normalizeData},
    {"name": "funcdef$ebnf$1", "symbols": ["paramlist"], "postprocess": id},
    {"name": "funcdef$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "funcdef", "symbols": [(tokens.has("def") ? {type: "def"} : def), "_", "identifier", "_", (tokens.has("lparan") ? {type: "lparan"} : lparan), "_", "funcdef$ebnf$1", (tokens.has("rparan") ? {type: "rparan"} : rparan), "NL", "_", (tokens.has("lbrace") ? {type: "lbrace"} : lbrace), "NL", "_", "statelist", "NL", "_", (tokens.has("rbrace") ? {type: "rbrace"} : rbrace), "NL", "_"], "postprocess": normalizeData},
    {"name": "paramlist$ebnf$1$subexpression$1", "symbols": [(tokens.has("comma") ? {type: "comma"} : comma), "_", "paramlist"]},
    {"name": "paramlist$ebnf$1", "symbols": ["paramlist$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "paramlist$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "paramlist", "symbols": ["type_keyword", "_", "identifier", "_", "paramlist$ebnf$1"], "postprocess":  data => {
            return normalizeData(normalizeData(data))
        }
         },
    {"name": "statelist$ebnf$1", "symbols": ["statelist"], "postprocess": id},
    {"name": "statelist$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "statelist", "symbols": ["statement", "_", "statelist$ebnf$1"], "postprocess": normalizeData},
    {"name": "statement", "symbols": ["vardecl", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": normalizeData},
    {"name": "statement", "symbols": ["atribstat", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": normalizeData},
    {"name": "statement", "symbols": ["printstat", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": normalizeData},
    {"name": "statement", "symbols": ["readstat", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": normalizeData},
    {"name": "statement$ebnf$1", "symbols": ["expression"], "postprocess": id},
    {"name": "statement$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "statement", "symbols": ["returnstat", "statement$ebnf$1", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": normalizeData},
    {"name": "statement", "symbols": ["ifstat", "NL"], "postprocess": normalizeData},
    {"name": "statement", "symbols": ["forstat", "NL"], "postprocess": normalizeData},
    {"name": "statement", "symbols": [(tokens.has("lbrace") ? {type: "lbrace"} : lbrace), "NL", "_", "statelist", "_", (tokens.has("rbrace") ? {type: "rbrace"} : rbrace), "NL"], "postprocess": normalizeData},
    {"name": "statement", "symbols": [{"literal":"break"}, "_", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": normalizeData},
    {"name": "statement", "symbols": [(tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": normalizeData},
    {"name": "vardecl$ebnf$1", "symbols": ["atribstat"], "postprocess": id},
    {"name": "vardecl$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "vardecl", "symbols": ["type_keyword", "_", "vardecl$ebnf$1"], "postprocess": normalizeData},
    {"name": "atribstat$ebnf$1$subexpression$1$subexpression$1", "symbols": ["expression"]},
    {"name": "atribstat$ebnf$1$subexpression$1", "symbols": [(tokens.has("equals") ? {type: "equals"} : equals), "_", "atribstat$ebnf$1$subexpression$1$subexpression$1"]},
    {"name": "atribstat$ebnf$1", "symbols": ["atribstat$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "atribstat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "atribstat", "symbols": ["lvalue", "atribstat$ebnf$1"], "postprocess":  data => {
        if(Array.isArray(data[1])){
            data[1][2] = data[1][2][0]
            data = [data[0], data[1][0], data[1][1], data[1][2]]
        }
        return normalizeData(data) }
                },
    {"name": "paramlistcall$ebnf$1", "symbols": ["lvalue"], "postprocess": id},
    {"name": "paramlistcall$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "paramlistcall$ebnf$2$subexpression$1", "symbols": [(tokens.has("comma") ? {type: "comma"} : comma), "_", "paramlistcall", "_"]},
    {"name": "paramlistcall$ebnf$2", "symbols": ["paramlistcall$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "paramlistcall$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "paramlistcall", "symbols": ["paramlistcall$ebnf$1", "_", "paramlistcall$ebnf$2"], "postprocess": data => normalizeData(data[0])},
    {"name": "printstat", "symbols": [{"literal":"print"}, "_", "expression"], "postprocess": normalizeData},
    {"name": "readstat", "symbols": [{"literal":"read"}, "_", "lvalue"], "postprocess": normalizeData},
    {"name": "returnstat", "symbols": [{"literal":"return"}, "_"], "postprocess": data => data[1] = data[1].value},
    {"name": "ifstat$ebnf$1$subexpression$1", "symbols": ["_", {"literal":"else"}, "_", "statelist"]},
    {"name": "ifstat$ebnf$1", "symbols": ["ifstat$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "ifstat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ifstat", "symbols": [{"literal":"if"}, "_", (tokens.has("lparan") ? {type: "lparan"} : lparan), "_", "expression", "_", (tokens.has("rparan") ? {type: "rparan"} : rparan), "_", "statement", "ifstat$ebnf$1"], "postprocess": normalizeData},
    {"name": "forstat", "symbols": [{"literal":"for"}, "_", (tokens.has("lparan") ? {type: "lparan"} : lparan), "_", "vardecl", "_", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "_", "expression", "_", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "_", "atribstat", "_", (tokens.has("rparan") ? {type: "rparan"} : rparan), "_", "statement"], "postprocess": normalizeData},
    {"name": "expression$ebnf$1$subexpression$1", "symbols": [(tokens.has("compare_keyword") ? {type: "compare_keyword"} : compare_keyword), "_", "numexpression"]},
    {"name": "expression$ebnf$1", "symbols": ["expression$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "expression$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "expression", "symbols": ["numexpression", "expression$ebnf$1"], "postprocess":  data => {
            return normalizeData(normalizeData(data))
        } },
    {"name": "numexpression$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("plus") ? {type: "plus"} : plus)]},
    {"name": "numexpression$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("minus") ? {type: "minus"} : minus)]},
    {"name": "numexpression$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("bool_compare") ? {type: "bool_compare"} : bool_compare)]},
    {"name": "numexpression$ebnf$1$subexpression$1", "symbols": ["numexpression$ebnf$1$subexpression$1$subexpression$1", "_", "numexpression"]},
    {"name": "numexpression$ebnf$1", "symbols": ["numexpression$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "numexpression$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "numexpression", "symbols": ["term", "numexpression$ebnf$1"], "postprocess":  data => {
            return normalizeData(normalizeData(data))
        } },
    {"name": "term$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("times") ? {type: "times"} : times)]},
    {"name": "term$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("divide") ? {type: "divide"} : divide)]},
    {"name": "term$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("percentage") ? {type: "percentage"} : percentage)]},
    {"name": "term$ebnf$1$subexpression$1", "symbols": ["term$ebnf$1$subexpression$1$subexpression$1", "_", "term"]},
    {"name": "term$ebnf$1", "symbols": ["term$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "term$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "term", "symbols": ["unaryexpr", "_", "term$ebnf$1"], "postprocess":  data => {
            return normalizeData(normalizeData(data))
        } },
    {"name": "unaryexpr$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("plus") ? {type: "plus"} : plus)]},
    {"name": "unaryexpr$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("minus") ? {type: "minus"} : minus)]},
    {"name": "unaryexpr$ebnf$1$subexpression$1", "symbols": ["unaryexpr$ebnf$1$subexpression$1$subexpression$1", "_"]},
    {"name": "unaryexpr$ebnf$1", "symbols": ["unaryexpr$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "unaryexpr$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unaryexpr", "symbols": ["unaryexpr$ebnf$1", "factor"], "postprocess": normalizeData},
    {"name": "factor", "symbols": [(tokens.has("float") ? {type: "float"} : float)], "postprocess": normalizeData},
    {"name": "factor", "symbols": [(tokens.has("int") ? {type: "int"} : int)], "postprocess": normalizeData},
    {"name": "factor", "symbols": [(tokens.has("string") ? {type: "string"} : string)], "postprocess": normalizeData},
    {"name": "factor", "symbols": [(tokens.has("boolean") ? {type: "boolean"} : boolean)], "postprocess": normalizeData},
    {"name": "factor", "symbols": [], "postprocess": () => null},
    {"name": "factor", "symbols": ["lvalue"], "postprocess": normalizeData},
    {"name": "factor", "symbols": [(tokens.has("lparan") ? {type: "lparan"} : lparan), "numexpression", (tokens.has("rparan") ? {type: "rparan"} : rparan)], "postprocess": normalizeData},
    {"name": "lvalue$ebnf$1$subexpression$1", "symbols": ["bracketexpr"]},
    {"name": "lvalue$ebnf$1$subexpression$1", "symbols": ["funccall"]},
    {"name": "lvalue$ebnf$1", "symbols": ["lvalue$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "lvalue$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "lvalue", "symbols": ["identifier", "_", "lvalue$ebnf$1"], "postprocess":  data => {
            return normalizeData(normalizeData(data))
        } },
    {"name": "funccall", "symbols": [(tokens.has("lparan") ? {type: "lparan"} : lparan), "_", "paramlistcall", "_", (tokens.has("rparan") ? {type: "rparan"} : rparan)], "postprocess": normalizeData},
    {"name": "bracketexpr$ebnf$1", "symbols": ["bracketexpr"], "postprocess": id},
    {"name": "bracketexpr$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "bracketexpr", "symbols": [(tokens.has("lbracket") ? {type: "lbracket"} : lbracket), "numexpression", (tokens.has("rbracket") ? {type: "rbracket"} : rbracket), "_", "bracketexpr$ebnf$1"], "postprocess": normalizeData},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (tokens.has("whitespace") ? {type: "whitespace"} : whitespace)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": data => data[0][0] ? 'WS' : ''},
    {"name": "NL$ebnf$1", "symbols": []},
    {"name": "NL$ebnf$1", "symbols": ["NL$ebnf$1", (tokens.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "NL", "symbols": ["NL$ebnf$1"], "postprocess": data => data[0][0] ? 'NL' : ''},
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
