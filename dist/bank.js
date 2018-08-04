"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bankNumber_1 = require("./bankNumber");
var Bank = /** @class */ (function () {
    function Bank(bankId, name, bankNumbers) {
        this._bankId = bankId;
        this._name = name;
        this._bankNumbers = bankNumbers;
    }
    Object.defineProperty(Bank.prototype, "bankId", {
        /// <summary>
        ///     Internal id for uniquely identifying Banks.
        /// </summary>
        get: function () {
            return this._bankId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bank.prototype, "name", {
        /// <summary>
        /// The full bank name
        /// </summary>
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bank.prototype, "bankNumbers", {
        get: function () {
            return this._bankNumbers;
        },
        enumerable: true,
        configurable: true
    });
    /// <summary>
    /// Is the bank number valid for the specified bank.
    /// </summary>
    /// <param name="bankId">The bank id</param>
    /// <param name="bankNumber">The bank number</param>
    /// <returns>true/false</returns>
    Bank.isBankNumberValid = function (bankId, bankNumber) {
        var bank = this.getBank(bankId);
        return bank ? bank.isBankNumberValid(bankNumber) : false;
    };
    /// <summary>
    /// Is the branch number valid for the bank & bank number
    /// </summary>
    /// <param name="bankId">The bank id</param>
    /// <param name="bankNumber">The bank number</param>
    /// <param name="branchNumber">The branch number</param>
    /// <returns>true/false</returns>
    Bank.isBranchNumberValid = function (bankId, bankNumber, branchNumber) {
        var bank = this.getBank(bankId);
        return bank ? bank.isBranchNumberValid(bankNumber, branchNumber) : false;
    };
    /// <summary>
    /// Is the Account number valid for the bank, bank number and branch.
    /// </summary>
    /// <param name="bankId">bank id</param>
    /// <param name="bankNumber">the bank number</param>
    /// <param name="branchNumber">the branch number</param>
    /// <param name="accountNumber">the account number</param>
    /// <param name="suffix">the suffix</param>
    /// <returns></returns>
    Bank.isAccountNumberValid = function (bankId, bankNumber, branchNumber, accountNumber, suffix) {
        var bank = this.getBank(bankId);
        if (bank == null)
            return false;
        var formattedBankAccount = this.getFormattedBankAccount(bankNumber, branchNumber, accountNumber, suffix);
        var bankNumberInstance = bank.getBankNumber(bankNumber);
        return bankNumberInstance != null && bankNumberInstance.isFormattedAccountNumberValid(formattedBankAccount);
    };
    /// <summary>
    /// Get the bank by the bank id. 
    /// </summary>
    /// <param name="bankId">the bank id.</param>
    /// <returns>The bank or null if it cannot be found</returns>
    Bank.getBank = function (bankId) {
        var banks = this.values.filter(function (x) { return x.bankId == bankId; });
        var bank = undefined;
        if (banks && banks.length > 0) {
            bank = banks[0];
        }
        return bank;
    };
    Bank.prototype.isBankNumberValid = function (bankNumber) {
        var bankNumbers = this._bankNumbers.filter(function (number) { return number.value == bankNumber; });
        return bankNumbers && bankNumbers.length > 0;
    };
    Bank.prototype.isBranchNumberValid = function (bankNumber, branchNumber) {
        var foundBankNumber = this.getBankNumber(bankNumber);
        return foundBankNumber != null && foundBankNumber.containsBranchNumber(branchNumber);
    };
    Bank.prototype.getBankNumber = function (bankNumber) {
        var bankNumbers = this.bankNumbers.filter(function (number) { return number.value == bankNumber; });
        var bankNumberInstance = undefined;
        if (bankNumbers && bankNumbers.length > 0) {
            bankNumberInstance = bankNumbers[0];
        }
        return bankNumberInstance;
    };
    Object.defineProperty(Bank, "values", {
        get: function () {
            var banks = new Array(this.anz, this.Asb, this.Bnz, this.Citibank, this.Hsbc, this.BankOfChina, this.Kiwibank, this.Tsb, this.Westpac, this.Other);
            return banks;
        },
        enumerable: true,
        configurable: true
    });
    Bank.getFormattedBankAccount = function (bankNumber, branchNumber, accountNumber, suffix) {
        return 'asdf';
        // return `${bankNumber:00}${branchNumber:0000}-${accountNumber:0000000}-${suffix:000}`;
    };
    Bank.anz = new Bank(1, "ANZ", [bankNumber_1.BankNumber.one, bankNumber_1.BankNumber.four, bankNumber_1.BankNumber.six, bankNumber_1.BankNumber.eleven, bankNumber_1.BankNumber.twentyFive]);
    Bank.Asb = new Bank(2, "ASB Bank", [bankNumber_1.BankNumber.twelve, bankNumber_1.BankNumber.twentyFour]);
    Bank.Bnz = new Bank(3, "BNZ", [bankNumber_1.BankNumber.two, bankNumber_1.BankNumber.eight]);
    Bank.Citibank = new Bank(4, "Citibank N.A.", [bankNumber_1.BankNumber.thirtyOne]);
    Bank.Hsbc = new Bank(5, "HSBC New Zealand", [bankNumber_1.BankNumber.thirty]);
    Bank.BankOfChina = new Bank(6, "Industrial and Commercial Bank of China (New Zealand) Ltd", [bankNumber_1.BankNumber.ten]);
    Bank.Kiwibank = new Bank(7, "Kiwibank", [bankNumber_1.BankNumber.thirtyEight]);
    Bank.Tsb = new Bank(8, "TSB Bank", [bankNumber_1.BankNumber.fifteen]);
    Bank.Westpac = new Bank(9, "Westpac", [bankNumber_1.BankNumber.three, bankNumber_1.BankNumber.thirteen, bankNumber_1.BankNumber.fourteen, bankNumber_1.BankNumber.sixteen, bankNumber_1.BankNumber.seventeen, bankNumber_1.BankNumber.eighteen, bankNumber_1.BankNumber.nineteen, bankNumber_1.BankNumber.twenty, bankNumber_1.BankNumber.twentyOne, bankNumber_1.BankNumber.twentyTwo, bankNumber_1.BankNumber.twentyThree, bankNumber_1.BankNumber.twentySeven]);
    Bank.Other = new Bank(10, "Other", [bankNumber_1.BankNumber.one, bankNumber_1.BankNumber.two, bankNumber_1.BankNumber.three, bankNumber_1.BankNumber.four, bankNumber_1.BankNumber.six, bankNumber_1.BankNumber.eight, bankNumber_1.BankNumber.nine, bankNumber_1.BankNumber.ten, bankNumber_1.BankNumber.eleven, bankNumber_1.BankNumber.twelve, bankNumber_1.BankNumber.thirteen, bankNumber_1.BankNumber.fourteen, bankNumber_1.BankNumber.fifteen, bankNumber_1.BankNumber.sixteen, bankNumber_1.BankNumber.seventeen, bankNumber_1.BankNumber.eighteen,
        bankNumber_1.BankNumber.nineteen, bankNumber_1.BankNumber.twenty, bankNumber_1.BankNumber.twentyOne, bankNumber_1.BankNumber.twentyTwo, bankNumber_1.BankNumber.twentyThree, bankNumber_1.BankNumber.twentyFour, bankNumber_1.BankNumber.twentyFive, bankNumber_1.BankNumber.twentySix, bankNumber_1.BankNumber.twentySeven, bankNumber_1.BankNumber.twentyEight, bankNumber_1.BankNumber.twentyNine, bankNumber_1.BankNumber.thirty, bankNumber_1.BankNumber.thirtyOne, bankNumber_1.BankNumber.thirtyThree, bankNumber_1.BankNumber.thirtyFive, bankNumber_1.BankNumber.thirtyEight]);
    return Bank;
}());
exports.Bank = Bank;
