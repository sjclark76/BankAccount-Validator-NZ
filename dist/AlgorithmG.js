"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulus11AlgorithmBase_1 = require("./modulus11AlgorithmBase");
class AlgorithmG extends modulus11AlgorithmBase_1.Modulus11AlgorithmBase {
    constructor() {
        super(...arguments);
        this.weightings = [0, 0, 0, 0, 0, 0, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];
        this.modulus = 10;
    }
}
exports.AlgorithmG = AlgorithmG;
