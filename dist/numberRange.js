"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberRange = /** @class */ (function () {
    function NumberRange(start, end) {
        if (start > end) {
            throw new Error("start '" + start + "' cannot be larger than end '" + end);
        }
        this.start = start;
        this.end = end;
    }
    return NumberRange;
}());
exports.NumberRange = NumberRange;
