"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Modulus11AlgorithmBase {
    validate(formattedAccountNumber) {
        const accountNumber = formattedAccountNumber.replace(new RegExp("-", "g"), "");
        if (!this.weightings || this.weightings.length !== 16) {
            throw new Error("Invalid weightings");
        }
        if (!this.modulus) {
            throw new Error("modulus not defined");
        }
        if (accountNumber.length !== 16) {
            throw new Error(`Invalid Bank Account Format '${formattedAccountNumber}' ${accountNumber}`);
        }
        let total = 0;
        for (let i = 0; i < accountNumber.length; i++) {
            const value = +accountNumber.substring(i, i + 1);
            const weighting = this.weightings[i];
            const weightedValue = value * weighting;
            total += weightedValue;
        }
        return total % this.modulus === 0;
    }
}
exports.Modulus11AlgorithmBase = Modulus11AlgorithmBase;
class AlgorithmA extends Modulus11AlgorithmBase {
    constructor() {
        super(...arguments);
        this.weightings = [0, 0, 6, 3, 7, 9, 0, 10, 5, 8, 4, 2, 1, 0, 0, 0];
        this.modulus = 11;
    }
}
exports.AlgorithmA = AlgorithmA;
class AlgorithmD extends Modulus11AlgorithmBase {
    constructor() {
        super(...arguments);
        this.weightings = [0, 0, 0, 0, 0, 0, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0];
        this.modulus = 11;
    }
}
exports.AlgorithmD = AlgorithmD;
class AlgorithmE extends Modulus11AlgorithmBase {
    constructor() {
        super(...arguments);
        this.weightings = [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 3, 2, 0, 0, 1];
        this.modulus = 11;
    }
}
exports.AlgorithmE = AlgorithmE;
class AlgorithmF extends Modulus11AlgorithmBase {
    constructor() {
        super(...arguments);
        this.weightings = [0, 0, 0, 0, 0, 0, 1, 7, 3, 1, 7, 3, 1, 0, 0, 0];
        this.modulus = 10;
    }
}
exports.AlgorithmF = AlgorithmF;
class AlgorithmG extends Modulus11AlgorithmBase {
    constructor() {
        super(...arguments);
        this.weightings = [0, 0, 0, 0, 0, 0, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];
        this.modulus = 10;
    }
}
exports.AlgorithmG = AlgorithmG;
class AlgorithmX extends Modulus11AlgorithmBase {
    constructor() {
        super(...arguments);
        this.weightings = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.modulus = 1;
    }
}
exports.AlgorithmX = AlgorithmX;
