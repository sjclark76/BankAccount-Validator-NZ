"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulus11AlgorithmBase_1 = require("./modulus11AlgorithmBase");
class AlgorithmF extends modulus11AlgorithmBase_1.Modulus11AlgorithmBase {
    constructor() {
        super(...arguments);
        this.weightings = [0, 0, 0, 0, 0, 0, 1, 7, 3, 1, 7, 3, 1, 0, 0, 0];
        this.modulus = 10;
    }
}
exports.AlgorithmF = AlgorithmF;
