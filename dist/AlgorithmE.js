"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulus11AlgorithmBase_1 = require("./modulus11AlgorithmBase");
class AlgorithmE extends modulus11AlgorithmBase_1.Modulus11AlgorithmBase {
    constructor() {
        super(...arguments);
        this.weightings = [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 3, 2, 0, 0, 1];
        this.modulus = 11;
    }
}
exports.AlgorithmE = AlgorithmE;
