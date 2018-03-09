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
    /**
     * Transform [text](url) to <a href="url">text</a>
     *
     * @param {string} markdown
     */
    var link = function (markdown) {
        return markdown.replace(/\[([^[\\]*?)]\((.*?)\)/g, '<a href="$2">$1</a>');
    };
    exports.parse = link;
});
//# sourceMappingURL=index.js.map