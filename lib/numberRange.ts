export class NumberRange {
    start: number;
    end: number;
    constructor(start: number, end: number) {
        if (start > end) {
            throw new Error(`start '${start}' cannot be larger than end '${end}`);
        }
        this.start = start;
        this.end = end;
    }
}