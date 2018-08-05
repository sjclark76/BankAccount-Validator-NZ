"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const bank_1 = require("./bank");
function isBankAccountValid(bankId, bankNumber, branchNumber, accountNumber, suffix) {
    const isValid = bank_1.Bank.isAccountNumberValid(bankId, bankNumber, branchNumber, accountNumber, suffix);
    return isValid;
}
exports.isBankAccountValid = isBankAccountValid;
__export(require("./bank"));
