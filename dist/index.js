(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var link = function (markdown) {
        var sqBrackets = '\[[^[]]\]';
        var parenthesis = '\([^()]\)';
        return markdown.replace(new RegExp(sqBrackets + parenthesis), 'link');
    };
    exports.parse = link;
});
//# sourceMappingURL=index.js.map