"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bankNumber_1 = require("./bankNumber");
class Bank {
    constructor(bankId, name, bankNumbers) {
        this._bankId = bankId;
        this._name = name;
        this._bankNumbers = bankNumbers;
    }
    /// <summary>
    ///     Internal id for uniquely identifying Banks.
    /// </summary>
    get bankId() {
        return this._bankId;
    }
    /// <summary>
    /// The full bank name
    /// </summary>
    get name() {
        return this._name;
    }
    get bankNumbers() {
        return this._bankNumbers;
    }
    /// <summary>
    /// Is the bank number valid for the specified bank.
    /// </summary>
    /// <param name="bankId">The bank id</param>
    /// <param name="bankNumber">The bank number</param>
    /// <returns>true/false</returns>
    static isBankNumberValid(bankId, bankNumber) {
        var bank = this.getBank(bankId);
        return bank ? bank.isBankNumberValid(bankNumber) : false;
    }
    /// <summary>
    /// Is the branch number valid for the bank & bank number
    /// </summary>
    /// <param name="bankId">The bank id</param>
    /// <param name="bankNumber">The bank number</param>
    /// <param name="branchNumber">The branch number</param>
    /// <returns>true/false</returns>
    static isBranchNumberValid(bankId, bankNumber, branchNumber) {
        var bank = this.getBank(bankId);
        return bank ? bank.isBranchNumberValid(bankNumber, branchNumber) : false;
    }
    /// <summary>
    /// Is the Account number valid for the bank, bank number and branch.
    /// </summary>
    /// <param name="bankId">bank id</param>
    /// <param name="bankNumber">the bank number</param>
    /// <param name="branchNumber">the branch number</param>
    /// <param name="accountNumber">the account number</param>
    /// <param name="suffix">the suffix</param>
    /// <returns></returns>
    static isAccountNumberValid(bankId, bankNumber, branchNumber, accountNumber, suffix) {
        var bank = this.getBank(bankId);
        if (bank == null)
            return false;
        var formattedBankAccount = this.getFormattedBankAccount(bankNumber, branchNumber, accountNumber, suffix);
        var bankNumberInstance = bank.getBankNumber(bankNumber);
        return bankNumberInstance != null && bankNumberInstance.isFormattedAccountNumberValid(formattedBankAccount);
    }
    /// <summary>
    /// Get the bank by the bank id. 
    /// </summary>
    /// <param name="bankId">the bank id.</param>
    /// <returns>The bank or null if it cannot be found</returns>
    static getBank(bankId) {
        var banks = this.values.filter(x => x.bankId == bankId);
        let bank = undefined;
        if (banks && banks.length > 0) {
            bank = banks[0];
        }
        return bank;
    }
    isBankNumberValid(bankNumber) {
        let bankNumbers = this._bankNumbers.filter(number => number.value == bankNumber);
        return bankNumbers && bankNumbers.length > 0;
    }
    isBranchNumberValid(bankNumber, branchNumber) {
        var foundBankNumber = this.getBankNumber(bankNumber);
        return foundBankNumber != null && foundBankNumber.containsBranchNumber(branchNumber);
    }
    getBankNumber(bankNumber) {
        var bankNumbers = this.bankNumbers.filter(number => number.value == bankNumber);
        let bankNumberInstance = undefined;
        if (bankNumbers && bankNumbers.length > 0) {
            bankNumberInstance = bankNumbers[0];
        }
        return bankNumberInstance;
    }
    static get values() {
        let banks = new Array(this.anz, this.Asb, this.Bnz, this.Citibank, this.Hsbc, this.BankOfChina, this.Kiwibank, this.Tsb, this.Westpac, this.Other);
        return banks;
    }
    static getFormattedBankAccount(bankNumber, branchNumber, accountNumber, suffix) {
        return `${bankNumber.toString().padStart(2, "0")}${branchNumber.toString().padStart(4, "0")}-${accountNumber.toString().padStart(7, "0")}-${suffix.toString().padStart(3, "0")}`;
    }
}
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
exports.Bank = Bank;
