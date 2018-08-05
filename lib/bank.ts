import { BankNumber } from "./bankNumber";

export class Bank {
    static anz: Bank = new Bank(1, "ANZ", [BankNumber.one, BankNumber.four, BankNumber.six, BankNumber.eleven, BankNumber.twentyFive]);
    static readonly Asb: Bank = new Bank(2, "ASB Bank", [BankNumber.twelve, BankNumber.twentyFour]);
    static readonly Bnz: Bank = new Bank(3, "BNZ", [BankNumber.two, BankNumber.eight]);
    static readonly Citibank: Bank = new Bank(4, "Citibank N.A.", [BankNumber.thirtyOne]);
    static readonly Hsbc: Bank = new Bank(5, "HSBC New Zealand", [BankNumber.thirty]);
    static readonly BankOfChina: Bank = new Bank(6, "Industrial and Commercial Bank of China (New Zealand) Ltd", [BankNumber.ten]);
    static readonly Kiwibank: Bank = new Bank(7, "Kiwibank", [BankNumber.thirtyEight]);
    static readonly Tsb: Bank = new Bank(8, "TSB Bank", [BankNumber.fifteen]);
    static readonly Westpac: Bank = new Bank(9, "Westpac", [BankNumber.three, BankNumber.thirteen,
    BankNumber.fourteen, BankNumber.sixteen, BankNumber.seventeen, BankNumber.eighteen, BankNumber.nineteen, BankNumber.twenty,
    BankNumber.twentyOne, BankNumber.twentyTwo, BankNumber.twentyThree, BankNumber.twentySeven]);
    static readonly Other: Bank = new Bank(10, "Other", [BankNumber.one, BankNumber.two, BankNumber.three, BankNumber.four, BankNumber.six,
        BankNumber.eight, BankNumber.nine, BankNumber.ten, BankNumber.eleven, BankNumber.twelve, BankNumber.thirteen, BankNumber.fourteen,
        BankNumber.fifteen, BankNumber.sixteen, BankNumber.seventeen, BankNumber.eighteen, BankNumber.nineteen, BankNumber.twenty,
        BankNumber.twentyOne, BankNumber.twentyTwo, BankNumber.twentyThree, BankNumber.twentyFour, BankNumber.twentyFive,
        BankNumber.twentySix, BankNumber.twentySeven, BankNumber.twentyEight, BankNumber.twentyNine, BankNumber.thirty,
        BankNumber.thirtyOne, BankNumber.thirtyThree, BankNumber.thirtyFive, BankNumber.thirtyEight]);
    private _bankId: number;
    private _name: string;
    private _bankNumbers: BankNumber[];

    constructor(bankId: number, name: string, bankNumbers: BankNumber[]) {
        this._bankId = bankId;
        this._name = name;
        this._bankNumbers = bankNumbers;
    }

    /// <summary>
    ///     internal id for uniquely identifying Banks.
    /// </summary>
    get bankId(): number {
        return this._bankId;
    }

    /// <summary>
    /// ihe full bank name
    /// </summary>
    get name(): string {
        return this._name;
    }

    get bankNumbers(): BankNumber[] {
        return this._bankNumbers;
    }

    /// <summary>
    /// is the bank number valid for the specified bank.
    /// </summary>
    /// <param name="bankId">The bank id</param>
    /// <param name="bankNumber">The bank number</param>
    /// <returns>true/false</returns>
    static isBankNumberValid(bankId: number, bankNumber: number): boolean {
        const bank :(Bank|undefined) = this.getBank(bankId);

        return bank ? bank.isBankNumberValid(bankNumber) : false;
    }

    /// <summary>
    /// is the branch number valid for the bank & bank number
    /// </summary>
    /// <param name="bankId">The bank id</param>
    /// <param name="bankNumber">The bank number</param>
    /// <param name="branchNumber">The branch number</param>
    /// <returns>true/false</returns>
    static isBranchNumberValid(bankId: number, bankNumber: number, branchNumber: number): boolean {
        var bank:(Bank|undefined) = this.getBank(bankId);

        return bank ? bank.isBranchNumberValid(bankNumber, branchNumber) : false;
    }

    /// <summary>
    /// is the Account number valid for the bank, bank number and branch.
    /// </summary>
    /// <param name="bankId">bank id</param>
    /// <param name="bankNumber">the bank number</param>
    /// <param name="branchNumber">the branch number</param>
    /// <param name="accountNumber">the account number</param>
    /// <param name="suffix">the suffix</param>
    /// <returns></returns>
    static isAccountNumberValid(bankId: number, bankNumber: number, branchNumber: number, accountNumber: number, suffix: number): boolean {

        let bank:(Bank|undefined) = this.getBank(bankId);

        if (!bank) {
            return false;
        }
        let bankNumberInstance : BankNumber | undefined = bank.getBankNumber(bankNumber);

        if(bankNumberInstance) {
            let formattedBankAccount :string = this.getFormattedBankAccount(bankNumber, branchNumber, accountNumber, suffix);

            return  bankNumberInstance.isFormattedAccountNumberValid(formattedBankAccount);
        } else {
            return false;
        }
    }

    /// <summary>
    /// get the bank by the bank id.
    /// </summary>
    /// <param name="bankId">the bank id.</param>
    /// <returns>The bank or null if it cannot be found</returns>

    static getBank(bankId: number): Bank | undefined {
        let banks : Bank[] = this.values.filter(x => x.bankId === bankId);

        let bank: Bank | undefined = undefined;

        if (banks && banks.length > 0) {
            bank = banks[0];
        }

        return bank;
    }

    private isBankNumberValid(bankNumber: number): boolean {
        let bankNumbers : BankNumber[] = this._bankNumbers.filter(number => number.value === bankNumber);

        return bankNumbers && bankNumbers.length > 0;
    }

    private isBranchNumberValid(bankNumber: number, branchNumber: number): boolean {
        var foundBankNumber : BankNumber| undefined = this.getBankNumber(bankNumber);

        return foundBankNumber != null && foundBankNumber.containsBranchNumber(branchNumber);
    }

    private getBankNumber(bankNumber: number): BankNumber | undefined {

        var bankNumbers: BankNumber[] = this.bankNumbers.filter(number => number.value === bankNumber);

        let bankNumberInstance: BankNumber | undefined = undefined;

        if (bankNumbers && bankNumbers.length > 0) {
            bankNumberInstance = bankNumbers[0];
        }

        return bankNumberInstance;
    }

    static get values(): Bank[] {

        let banks: Bank[] = new Array(this.anz, this.Asb, this.Bnz, this.Citibank, this.Hsbc, this.BankOfChina,
            this.Kiwibank, this.Tsb, this.Westpac, this.Other);

        return banks;

    }

    private static getFormattedBankAccount(bankNumber: number, branchNumber: number, accountNumber: number, suffix: number): string {

        // tslint:disable-next-line:max-line-length
        return `${bankNumber.toString().padStart(2, "0")}${branchNumber.toString().padStart(4, "0")}-${accountNumber.toString().padStart(7, "0")}-${suffix.toString().padStart(3, "0")}`;
    }
}