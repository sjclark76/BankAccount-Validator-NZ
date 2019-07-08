"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulus11AlgorithmBase_1 = require("./modulus11AlgorithmBase");
class AlgorithmA extends modulus11AlgorithmBase_1.Modulus11AlgorithmBase {
    constructor() {
        super(...arguments);
        this.weightings = [0, 0, 6, 3, 7, 9, 0, 10, 5, 8, 4, 2, 1, 0, 0, 0];
        this.modulus = 11;
    }
}
exports.AlgorithmA = AlgorithmA;
