'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class NumberRange {
  constructor(start, end) {
    if (start > end) {
      throw new Error(`start '${start}' cannot be larger than end '${end}`);
    }
    this.start = start;
    this.end = end;
  }
}
exports.NumberRange = NumberRange;
