// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const tokens = require('./tokens.js')
var grammar = {
    Lexer: tokens,
    ParserRules: [
    {"name": "input", "symbols": ["_", "value", "_"], "postprocess": (data) => data[1]},
    {"name": "input", "symbols": ["identifier"], "postprocess": id},
    {"name": "input", "symbols": ["attribution"]},
    {"name": "input", "symbols": ["declaration"]},
    {"name": "input", "symbols": ["keyword"], "postprocess": id},
    {"name": "input", "symbols": ["additive"], "postprocess": id},
    {"name": "declaration$ebnf$1", "symbols": [(tokens.has("type_modifier") ? {type: "type_modifier"} : type_modifier)], "postprocess": id},
    {"name": "declaration$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "declaration", "symbols": ["declaration$ebnf$1", "_", (tokens.has("type_keyword") ? {type: "type_keyword"} : type_keyword), "_", "identifier", "_"], "postprocess":  (data) => {
            return {
                type: 'declaration',
                data
            }
        } },
    {"name": "declaration$ebnf$2", "symbols": [(tokens.has("type_modifier") ? {type: "type_modifier"} : type_modifier)], "postprocess": id},
    {"name": "declaration$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "declaration", "symbols": ["declaration$ebnf$2", "_", (tokens.has("type_keyword") ? {type: "type_keyword"} : type_keyword), "_", "attribution"], "postprocess":  (data) => {
            return {
                type: 'declaration',
                data
            }
        } },
    {"name": "attribution", "symbols": ["identifier", "_", "equals", "_", "additive", "_"], "postprocess":  (data) => {
            return {
                type: 'attribution',
                data
            }
        } },
    {"name": "keyword", "symbols": [(tokens.has("keyword") ? {type: "keyword"} : keyword)], "postprocess": id},
    {"name": "additive", "symbols": ["multiplicative", "_", "plus", "_", "additive", "_"], "postprocess": 
        (data) => {
            return {
                type: "operation",
                op: data[2],
                left: data[0],
                right: data[4]
            };
        }
                },
    {"name": "additive", "symbols": ["lparan", "_", "multiplicative", "_", "plus", "_", "additive", "_", "rparan", "_"], "postprocess": 
        (data) => {
            return {
                type: "operation",
                op: data[4],
                left: data[2],
                right: data[6]
            };
        }
                },
    {"name": "additive", "symbols": ["multiplicative", "_", "minus", "_", "additive", "_"], "postprocess": 
        (data) => {
            return {
                type: "operation",
                op: data[2],
                left: data[0],
                right: data[4]
            };
        }
        
                },
    {"name": "additive", "symbols": ["lparan", "_", "multiplicative", "_", "minus", "_", "additive", "_", "rparan", "_"], "postprocess": 
        (data) => {
            return {
                type: "operation",
                op: data[4],
                left: data[2],
                right: data[6]
            };
        }
                },
    {"name": "additive", "symbols": ["lparan", "_", "multiplicative", "_", "rparan", "_"], "postprocess": (data) => data[2]},
    {"name": "additive", "symbols": ["multiplicative", "_"], "postprocess": id},
    {"name": "multiplicative", "symbols": ["number", "_", "times", "_", "multiplicative"], "postprocess": 
        (data) => {
            return {
                type: "operation",
                op: data[2],
                left: data[0],
                right: data[4]
            };
        }
                },
    {"name": "multiplicative", "symbols": ["lparan", "_", "number", "_", "times", "_", "multiplicative", "_", "rparan"], "postprocess": 
        (data) => {
            return {
                type: "operation",
                op: data[4],
                left: data[2],
                right: data[6]
            };
        }
                },
    {"name": "multiplicative", "symbols": ["number", "_", "divide", "_", "multiplicative"], "postprocess": 
        (data) => {
            return {
                type: "operation",
                op: data[2],
                left: data[0],
                right: data[4]
            };
        }
                },
    {"name": "multiplicative", "symbols": ["lparan", "_", "number", "_", "divide", "_", "multiplicative", "_", "rparan"], "postprocess": 
        (data) => {
            return {
                type: "operation",
                op: data[4],
                left: data[2],
                right: data[6]
            };
        }
                },
    {"name": "multiplicative", "symbols": ["lparan", "_", "number", "_", "rparan"], "postprocess": (data) => data[2]},
    {"name": "multiplicative", "symbols": ["number"], "postprocess": id},
    {"name": "value", "symbols": ["number"], "postprocess": id},
    {"name": "value", "symbols": ["boolean"], "postprocess": id},
    {"name": "value", "symbols": [(tokens.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "value", "symbols": ["array"], "postprocess": id},
    {"name": "value", "symbols": ["cNull"], "postprocess": id},
    {"name": "identifier", "symbols": [(tokens.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": id},
    {"name": "array", "symbols": [{"literal":"["}, "_", "array_items", "_", {"literal":"]"}], "postprocess": (data) => data[2]},
    {"name": "array", "symbols": [{"literal":"["}, "_", {"literal":"]"}], "postprocess": () => []},
    {"name": "array_items", "symbols": ["value"], "postprocess": (data) => [data[0]]},
    {"name": "array_items", "symbols": ["value", "_", {"literal":","}, "_", "array_items"], "postprocess": (data) => [data[0], ...data[4]]},
    {"name": "string", "symbols": [{"literal":"\""}, "characters", {"literal":"\""}], "postprocess": (data) => data[1]},
    {"name": "characters", "symbols": ["character"], "postprocess": id},
    {"name": "characters", "symbols": ["character", "characters"], "postprocess": (data) => data[0] + data[1]},
    {"name": "character", "symbols": [/[^\"\\]/], "postprocess": id},
    {"name": "character", "symbols": [{"literal":"\\"}, "escape"], "postprocess": (data) => data[1]},
    {"name": "escape", "symbols": [{"literal":"\""}], "postprocess": () => '"'},
    {"name": "escape", "symbols": [{"literal":"\\"}], "postprocess": () => "\\"},
    {"name": "escape", "symbols": [{"literal":"/"}], "postprocess": () => "/"},
    {"name": "escape", "symbols": [{"literal":"b"}], "postprocess": () => "\b"},
    {"name": "escape", "symbols": [{"literal":"f"}], "postprocess": () => "\f"},
    {"name": "escape", "symbols": [{"literal":"n"}], "postprocess": () => "\n"},
    {"name": "escape", "symbols": [{"literal":"r"}], "postprocess": () => "\r"},
    {"name": "escape", "symbols": [{"literal":"t"}], "postprocess": () => "\t"},
    {"name": "escape", "symbols": [{"literal":"u"}, "hex", "hex", "hex", "hex"], "postprocess":  (data) => {
            const code = (((((data[1]*16) + data[2])*16) + data[3])*16 + data[4])
            return String.fromCharCode(code)
        } 
                },
    {"name": "hex", "symbols": [(tokens.has("number") ? {type: "number"} : number)], "postprocess": (data) =>  Number(data[0])},
    {"name": "hex", "symbols": [/[a-fA-F]/], "postprocess":  
        (data) =>  {
            switch (data[0].toLowerCase()) {
                case 'a': return 10;
                case 'b': return 11;
                case 'c': return 12;
                case 'd': return 13;
                case 'e': return 14;
                case 'f': return 15;
                default: return data[0];
            }
        }
                },
    {"name": "cNull", "symbols": [(tokens.has("cNull") ? {type: "cNull"} : cNull)], "postprocess": () => null},
    {"name": "boolean", "symbols": [(tokens.has("boolean_true") ? {type: "boolean_true"} : boolean_true)], "postprocess": () => true},
    {"name": "boolean", "symbols": [(tokens.has("boolean_false") ? {type: "boolean_false"} : boolean_false)], "postprocess": () => false},
    {"name": "number", "symbols": [(tokens.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "rparan", "symbols": [(tokens.has("rparan") ? {type: "rparan"} : rparan)], "postprocess": id},
    {"name": "lparan", "symbols": [(tokens.has("lparan") ? {type: "lparan"} : lparan)], "postprocess": id},
    {"name": "plus", "symbols": [(tokens.has("plus") ? {type: "plus"} : plus)], "postprocess": id},
    {"name": "minus", "symbols": [(tokens.has("minus") ? {type: "minus"} : minus)], "postprocess": id},
    {"name": "times", "symbols": [(tokens.has("times") ? {type: "times"} : times)], "postprocess": id},
    {"name": "divide", "symbols": [(tokens.has("divide") ? {type: "divide"} : divide)], "postprocess": id},
    {"name": "semicolon", "symbols": [(tokens.has("semicolon") ? {type: "semicolon"} : semicolon)], "postprocess": id},
    {"name": "equals", "symbols": [(tokens.has("equals") ? {type: "equals"} : equals)], "postprocess": id},
    {"name": "nonDigit", "symbols": [/[a-zA-Z_]/], "postprocess": id},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (tokens.has("whitespace") ? {type: "whitespace"} : whitespace)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": id}
]
  , ParserStart: "input"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
