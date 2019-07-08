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
