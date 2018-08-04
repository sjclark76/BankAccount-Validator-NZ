"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modulus11AlgorithmBase_1 = require("./modulus11AlgorithmBase");
var numberRange_1 = require("./numberRange");
var BankNumber = /** @class */ (function () {
    function BankNumber(bankNumber, algorithm, ranges) {
        this._algorithm = algorithm;
        this.value = bankNumber;
        this._ranges = ranges;
    }
    BankNumber.prototype.containsBranchNumber = function (branchNumber) {
        return this._ranges.some(function (numberRange) { return branchNumber >= numberRange.start && branchNumber <= numberRange.end; });
    };
    BankNumber.one = new BankNumber(1, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(1, 999), new numberRange_1.NumberRange(1100, 1199), new numberRange_1.NumberRange(1800, 1899)]);
    BankNumber.Two = new BankNumber(2, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(1, 999), new numberRange_1.NumberRange(1200, 1299)]);
    BankNumber.Three = new BankNumber(3, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(1, 999), new numberRange_1.NumberRange(1300, 1399), new numberRange_1.NumberRange(1500, 1599), new numberRange_1.NumberRange(1700, 1799), new numberRange_1.NumberRange(1900, 1999)]);
    BankNumber.Four = new BankNumber(4, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(2020, 2024)]);
    BankNumber.Six = new BankNumber(6, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(1, 999), new numberRange_1.NumberRange(1400, 1499)]);
    BankNumber.Eight = new BankNumber(8, new modulus11AlgorithmBase_1.AlgorithmD(), [new numberRange_1.NumberRange(6500, 6599)]);
    BankNumber.Nine = new BankNumber(9, new modulus11AlgorithmBase_1.AlgorithmE(), [new numberRange_1.NumberRange(0, 0)]);
    BankNumber.Ten = new BankNumber(10, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(5165, 5169)]);
    BankNumber.Eleven = new BankNumber(11, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(5000, 6499), new numberRange_1.NumberRange(6600, 8999)]);
    BankNumber.Twelve = new BankNumber(12, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(3000, 3299), new numberRange_1.NumberRange(3400, 3600), new numberRange_1.NumberRange(3600, 3699)]);
    BankNumber.Thirteen = new BankNumber(13, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(4900, 4999)]);
    BankNumber.Fourteen = new BankNumber(14, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(4700, 4799)]);
    BankNumber.Fifteen = new BankNumber(15, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(3900, 3999)]);
    BankNumber.Sixteen = new BankNumber(16, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(4400, 4499)]);
    BankNumber.Seventeen = new BankNumber(17, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(3300, 3399)]);
    BankNumber.Eighteen = new BankNumber(18, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(3500, 3599)]);
    BankNumber.Nineteen = new BankNumber(19, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(4600, 4649)]);
    BankNumber.Twenty = new BankNumber(20, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(4100, 4199)]);
    BankNumber.TwentyOne = new BankNumber(21, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(4800, 4899)]);
    BankNumber.TwentyTwo = new BankNumber(22, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(4000, 4099)]);
    BankNumber.TwentyThree = new BankNumber(23, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(3700, 3799)]);
    BankNumber.TwentyFour = new BankNumber(24, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(4300, 4349)]);
    BankNumber.TwentyFive = new BankNumber(25, new modulus11AlgorithmBase_1.AlgorithmF(), [new numberRange_1.NumberRange(2500, 2599)]);
    BankNumber.TwentySix = new BankNumber(26, new modulus11AlgorithmBase_1.AlgorithmG(), [new numberRange_1.NumberRange(2600, 2699)]);
    BankNumber.TwentySeven = new BankNumber(27, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(3800, 3849)]);
    BankNumber.TwentyEight = new BankNumber(28, new modulus11AlgorithmBase_1.AlgorithmG(), [new numberRange_1.NumberRange(2100, 2149)]);
    BankNumber.TwentyNine = new BankNumber(29, new modulus11AlgorithmBase_1.AlgorithmG(), [new numberRange_1.NumberRange(2150, 2299)]);
    BankNumber.Thirty = new BankNumber(30, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(2900, 2949)]);
    BankNumber.ThirtyOne = new BankNumber(31, new modulus11AlgorithmBase_1.AlgorithmX(), [new numberRange_1.NumberRange(2800, 2849)]);
    BankNumber.ThirtyThree = new BankNumber(33, new modulus11AlgorithmBase_1.AlgorithmF(), [new numberRange_1.NumberRange(6700, 6799)]);
    BankNumber.ThirtyFive = new BankNumber(35, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(2400, 2499)]);
    BankNumber.ThirtyEight = new BankNumber(38, new modulus11AlgorithmBase_1.AlgorithmA(), [new numberRange_1.NumberRange(9000, 9499)]);
    return BankNumber;
}());
exports.BankNumber = BankNumber;
