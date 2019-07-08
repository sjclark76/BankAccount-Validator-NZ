"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulus11AlgorithmBase_1 = require("./modulus11AlgorithmBase");
class AlgorithmD extends modulus11AlgorithmBase_1.Modulus11AlgorithmBase {
    constructor() {
        super(...arguments);
        this.weightings = [0, 0, 0, 0, 0, 0, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0];
        this.modulus = 11;
    }
}
exports.AlgorithmD = AlgorithmD;
