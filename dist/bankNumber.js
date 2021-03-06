"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AlgorithmX_1 = require("./AlgorithmX");
const AlgorithmG_1 = require("./AlgorithmG");
const AlgorithmF_1 = require("./AlgorithmF");
const AlgorithmE_1 = require("./AlgorithmE");
const AlgorithmD_1 = require("./AlgorithmD");
const AlgorithmA_1 = require("./AlgorithmA");
const numberRange_1 = require("./numberRange");
class BankNumber {
    constructor(bankNumber, algorithm, ranges) {
        this.algorithm = algorithm;
        this.value = bankNumber;
        this.ranges = ranges;
    }
    containsBranchNumber(branchNumber) {
        return this.ranges.some(numberRange => branchNumber >= numberRange.start && branchNumber <= numberRange.end);
    }
    isFormattedAccountNumberValid(formattedAccountNumber) {
        return this.algorithm.validate(formattedAccountNumber);
    }
}
// tslint:disable-next-line:max-line-length
BankNumber.one = new BankNumber(1, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(1, 999), new numberRange_1.NumberRange(1100, 1199), new numberRange_1.NumberRange(1800, 1899)]);
BankNumber.two = new BankNumber(2, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(1, 999), new numberRange_1.NumberRange(1200, 1299)]);
// tslint:disable-next-line:max-line-length
BankNumber.three = new BankNumber(3, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(1, 999), new numberRange_1.NumberRange(1300, 1399), new numberRange_1.NumberRange(1500, 1599), new numberRange_1.NumberRange(1700, 1799), new numberRange_1.NumberRange(1900, 1999)]);
BankNumber.four = new BankNumber(4, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(2020, 2024)]);
BankNumber.six = new BankNumber(6, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(1, 999), new numberRange_1.NumberRange(1400, 1499)]);
BankNumber.eight = new BankNumber(8, new AlgorithmD_1.AlgorithmD(), [new numberRange_1.NumberRange(6500, 6599)]);
BankNumber.nine = new BankNumber(9, new AlgorithmE_1.AlgorithmE(), [new numberRange_1.NumberRange(0, 0)]);
BankNumber.ten = new BankNumber(10, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(5165, 5169)]);
BankNumber.eleven = new BankNumber(11, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(5000, 6499), new numberRange_1.NumberRange(6600, 8999)]);
// tslint:disable-next-line:max-line-length
BankNumber.twelve = new BankNumber(12, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(3000, 3299), new numberRange_1.NumberRange(3400, 3600), new numberRange_1.NumberRange(3600, 3699)]);
BankNumber.thirteen = new BankNumber(13, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(4900, 4999)]);
BankNumber.fourteen = new BankNumber(14, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(4700, 4799)]);
BankNumber.fifteen = new BankNumber(15, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(3900, 3999)]);
BankNumber.sixteen = new BankNumber(16, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(4400, 4499)]);
BankNumber.seventeen = new BankNumber(17, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(3300, 3399)]);
BankNumber.eighteen = new BankNumber(18, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(3500, 3599)]);
BankNumber.nineteen = new BankNumber(19, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(4600, 4649)]);
BankNumber.twenty = new BankNumber(20, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(4100, 4199)]);
BankNumber.twentyOne = new BankNumber(21, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(4800, 4899)]);
BankNumber.twentyTwo = new BankNumber(22, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(4000, 4099)]);
BankNumber.twentyThree = new BankNumber(23, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(3700, 3799)]);
BankNumber.twentyFour = new BankNumber(24, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(4300, 4349)]);
BankNumber.twentyFive = new BankNumber(25, new AlgorithmF_1.AlgorithmF(), [new numberRange_1.NumberRange(2500, 2599)]);
BankNumber.twentySix = new BankNumber(26, new AlgorithmG_1.AlgorithmG(), [new numberRange_1.NumberRange(2600, 2699)]);
BankNumber.twentySeven = new BankNumber(27, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(3800, 3849)]);
BankNumber.twentyEight = new BankNumber(28, new AlgorithmG_1.AlgorithmG(), [new numberRange_1.NumberRange(2100, 2149)]);
BankNumber.twentyNine = new BankNumber(29, new AlgorithmG_1.AlgorithmG(), [new numberRange_1.NumberRange(2150, 2299)]);
BankNumber.thirty = new BankNumber(30, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(2900, 2949)]);
BankNumber.thirtyOne = new BankNumber(31, new AlgorithmX_1.AlgorithmX(), [new numberRange_1.NumberRange(2800, 2849)]);
BankNumber.thirtyThree = new BankNumber(33, new AlgorithmF_1.AlgorithmF(), [new numberRange_1.NumberRange(6700, 6799)]);
BankNumber.thirtyFive = new BankNumber(35, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(2400, 2499)]);
BankNumber.thirtyEight = new BankNumber(38, new AlgorithmA_1.AlgorithmA(), [new numberRange_1.NumberRange(9000, 9499)]);
exports.BankNumber = BankNumber;
