// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const tokens = require('./tokens.js')
const symbolTable = {}
var grammar = {
    Lexer: tokens,
    ParserRules: [
    {"name": "program$ebnf$1", "symbols": ["statement"], "postprocess": id},
    {"name": "program$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "program", "symbols": ["program$ebnf$1"], "postprocess": id},
    {"name": "program$ebnf$2", "symbols": ["funclist"], "postprocess": id},
    {"name": "program$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "program", "symbols": ["program$ebnf$2"], "postprocess": id},
    {"name": "funclist", "symbols": ["funcdef", "funclist"], "postprocess": data => data.join("")},
    {"name": "funclist", "symbols": ["funcdef"], "postprocess": id},
    {"name": "funcdef", "symbols": [(tokens.has("def") ? {type: "def"} : def), "_", "identifier", "_", (tokens.has("lparan") ? {type: "lparan"} : lparan), "_", "paramlist", "_", (tokens.has("rparan") ? {type: "rparan"} : rparan), "_", "NL", "_", (tokens.has("lbrace") ? {type: "lbrace"} : lbrace), "_", "NL", "_", "statelist", "_", "NL", "_", (tokens.has("rbrace") ? {type: "rbrace"} : rbrace), "_"], "postprocess":  data => {
            const returnData = []
            data.forEach(function(token) {
                if (typeof token.type === "string") {
                    returnData.push(token.type)
                } else if(Array.isArray(token)) {
                    returnData.push(...token)
                } else {
                    returnData.push(token)
                }
            })
            return returnData
        } },
    {"name": "paramlist", "symbols": [(tokens.has("type_keyword") ? {type: "type_keyword"} : type_keyword), "_", "identifier", "_", (tokens.has("comma") ? {type: "comma"} : comma), "_", "paramlist"], "postprocess":  data => {
            data[0] = data[0].value
            data[4] = data[4].value
            if(Array.isArray(data[6])) {
                data.push(...data[6])
                data.splice(6, 1)
            }
            return data
        } },
    {"name": "paramlist$ebnf$1", "symbols": ["identifier"], "postprocess": id},
    {"name": "paramlist$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "paramlist", "symbols": [(tokens.has("type_keyword") ? {type: "type_keyword"} : type_keyword), "_", "paramlist$ebnf$1"], "postprocess":  data => {
            data[0] = data[0].value
            return data
        } },
    {"name": "statelist$ebnf$1", "symbols": ["statelist"], "postprocess": id},
    {"name": "statelist$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "statelist", "symbols": ["statement", "statelist$ebnf$1"], "postprocess": id},
    {"name": "statement", "symbols": ["vardecl", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": id},
    {"name": "statement", "symbols": ["atribstat", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": id},
    {"name": "statement", "symbols": ["printstat", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": id},
    {"name": "statement", "symbols": ["readstat", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": id},
    {"name": "statement", "symbols": ["returnstat", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": id},
    {"name": "statement", "symbols": ["ifstat"], "postprocess": id},
    {"name": "statement", "symbols": ["forstat"], "postprocess": id},
    {"name": "statement", "symbols": [(tokens.has("lbrace") ? {type: "lbrace"} : lbrace), "statelist", (tokens.has("rbrace") ? {type: "rbrace"} : rbrace)], "postprocess": id},
    {"name": "statement", "symbols": [{"literal":"break"}, (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": id},
    {"name": "statement", "symbols": [(tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "NL"], "postprocess": id},
    {"name": "vardecl$ebnf$1", "symbols": []},
    {"name": "vardecl$ebnf$1$subexpression$1", "symbols": [(tokens.has("lbracket") ? {type: "lbracket"} : lbracket), (tokens.has("digit") ? {type: "digit"} : digit), (tokens.has("rbracket") ? {type: "rbracket"} : rbracket)]},
    {"name": "vardecl$ebnf$1", "symbols": ["vardecl$ebnf$1", "vardecl$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "vardecl", "symbols": [(tokens.has("type_keyword") ? {type: "type_keyword"} : type_keyword), "_", (tokens.has("identifier") ? {type: "identifier"} : identifier), "_", "vardecl$ebnf$1"], "postprocess": id},
    {"name": "vardecl", "symbols": [(tokens.has("type_keyword") ? {type: "type_keyword"} : type_keyword), "_", "atribstat"], "postprocess": id},
    {"name": "atribstat$subexpression$1", "symbols": ["expression"]},
    {"name": "atribstat$subexpression$1", "symbols": ["allocexpression"]},
    {"name": "atribstat$subexpression$1", "symbols": ["funccall"]},
    {"name": "atribstat", "symbols": ["lvalue", "_", (tokens.has("equals") ? {type: "equals"} : equals), "_", "atribstat$subexpression$1"]},
    {"name": "funccall", "symbols": ["identifier", (tokens.has("lparan") ? {type: "lparan"} : lparan), "paramlistcall", (tokens.has("rparan") ? {type: "rparan"} : rparan)]},
    {"name": "paramlistcall$ebnf$1$subexpression$1", "symbols": ["identifier", (tokens.has("comma") ? {type: "comma"} : comma), "paramlistcall"]},
    {"name": "paramlistcall$ebnf$1$subexpression$1", "symbols": ["identifier"]},
    {"name": "paramlistcall$ebnf$1", "symbols": ["paramlistcall$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "paramlistcall$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "paramlistcall", "symbols": ["paramlistcall$ebnf$1"]},
    {"name": "printstat", "symbols": [{"literal":"print"}, "expression"]},
    {"name": "readstat", "symbols": [{"literal":"read"}, "lvalue"]},
    {"name": "returnstat", "symbols": [{"literal":"return"}]},
    {"name": "ifstat$ebnf$1$subexpression$1", "symbols": [{"literal":"else"}, "statement"]},
    {"name": "ifstat$ebnf$1", "symbols": ["ifstat$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "ifstat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ifstat", "symbols": [{"literal":"if"}, (tokens.has("lparan") ? {type: "lparan"} : lparan), "expression", (tokens.has("rparan") ? {type: "rparan"} : rparan), "statement", "ifstat$ebnf$1"]},
    {"name": "forstat", "symbols": [{"literal":"for"}, (tokens.has("lparan") ? {type: "lparan"} : lparan), "atribstat", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "expression", (tokens.has("semicolon") ? {type: "semicolon"} : semicolon), "atribstat", (tokens.has("rparan") ? {type: "rparan"} : rparan), "statement"]},
    {"name": "allocexpression$ebnf$1$subexpression$1", "symbols": [(tokens.has("lbracket") ? {type: "lbracket"} : lbracket), "numexpression", (tokens.has("rbracket") ? {type: "rbracket"} : rbracket)]},
    {"name": "allocexpression$ebnf$1", "symbols": ["allocexpression$ebnf$1$subexpression$1"]},
    {"name": "allocexpression$ebnf$1$subexpression$2", "symbols": [(tokens.has("lbracket") ? {type: "lbracket"} : lbracket), "numexpression", (tokens.has("rbracket") ? {type: "rbracket"} : rbracket)]},
    {"name": "allocexpression$ebnf$1", "symbols": ["allocexpression$ebnf$1", "allocexpression$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "allocexpression", "symbols": [{"literal":"new"}, (tokens.has("type_keyword") ? {type: "type_keyword"} : type_keyword), "allocexpression$ebnf$1"]},
    {"name": "expression$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("minor") ? {type: "minor"} : minor)]},
    {"name": "expression$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("major") ? {type: "major"} : major)]},
    {"name": "expression$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("minor_or_equal") ? {type: "minor_or_equal"} : minor_or_equal)]},
    {"name": "expression$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("major_or_equal") ? {type: "major_or_equal"} : major_or_equal)]},
    {"name": "expression$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("equal_equal") ? {type: "equal_equal"} : equal_equal)]},
    {"name": "expression$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("not_equal") ? {type: "not_equal"} : not_equal)]},
    {"name": "expression$ebnf$1$subexpression$1", "symbols": ["expression$ebnf$1$subexpression$1$subexpression$1", "numexpression"]},
    {"name": "expression$ebnf$1", "symbols": ["expression$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "expression$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "expression", "symbols": ["numexpression", "expression$ebnf$1"]},
    {"name": "numexpression$ebnf$1", "symbols": []},
    {"name": "numexpression$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("plus") ? {type: "plus"} : plus)]},
    {"name": "numexpression$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("minus") ? {type: "minus"} : minus)]},
    {"name": "numexpression$ebnf$1$subexpression$1", "symbols": ["numexpression$ebnf$1$subexpression$1$subexpression$1", "term"]},
    {"name": "numexpression$ebnf$1", "symbols": ["numexpression$ebnf$1", "numexpression$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "numexpression", "symbols": ["term", "numexpression$ebnf$1"]},
    {"name": "term$ebnf$1", "symbols": []},
    {"name": "term$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("times") ? {type: "times"} : times)]},
    {"name": "term$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("divide") ? {type: "divide"} : divide)]},
    {"name": "term$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("percentage") ? {type: "percentage"} : percentage)]},
    {"name": "term$ebnf$1$subexpression$1", "symbols": ["term$ebnf$1$subexpression$1$subexpression$1", "unaryexpr"]},
    {"name": "term$ebnf$1", "symbols": ["term$ebnf$1", "term$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "term", "symbols": ["unaryexpr", "term$ebnf$1"]},
    {"name": "unaryexpr$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("plus") ? {type: "plus"} : plus)]},
    {"name": "unaryexpr$ebnf$1$subexpression$1$subexpression$1", "symbols": [(tokens.has("minus") ? {type: "minus"} : minus)]},
    {"name": "unaryexpr$ebnf$1$subexpression$1", "symbols": ["unaryexpr$ebnf$1$subexpression$1$subexpression$1"]},
    {"name": "unaryexpr$ebnf$1", "symbols": ["unaryexpr$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "unaryexpr$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unaryexpr", "symbols": ["unaryexpr$ebnf$1", "factor"]},
    {"name": "factor", "symbols": [(tokens.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "factor", "symbols": [(tokens.has("digit") ? {type: "digit"} : digit)], "postprocess": id},
    {"name": "factor", "symbols": [(tokens.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "factor", "symbols": [], "postprocess": () => null},
    {"name": "factor", "symbols": ["lvalue"], "postprocess": id},
    {"name": "factor", "symbols": [(tokens.has("lparan") ? {type: "lparan"} : lparan), "numexpression", (tokens.has("rparan") ? {type: "rparan"} : rparan)]},
    {"name": "lvalue$ebnf$1", "symbols": []},
    {"name": "lvalue$ebnf$1$subexpression$1", "symbols": [(tokens.has("lbracket") ? {type: "lbracket"} : lbracket), "numexpression", (tokens.has("rbracket") ? {type: "rbracket"} : rbracket)]},
    {"name": "lvalue$ebnf$1", "symbols": ["lvalue$ebnf$1", "lvalue$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "lvalue", "symbols": ["identifier", "lvalue$ebnf$1"], "postprocess": id},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (tokens.has("whitespace") ? {type: "whitespace"} : whitespace)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": () => "whitespace"},
    {"name": "NL$ebnf$1", "symbols": []},
    {"name": "NL$ebnf$1", "symbols": ["NL$ebnf$1", (tokens.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "NL", "symbols": ["NL$ebnf$1"], "postprocess": () => "newline"},
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
