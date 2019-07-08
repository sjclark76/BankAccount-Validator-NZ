import { BankNumber } from "./bankNumber";

export class Bank {

    /// <summary>
    ///     internal id for uniquely identifying Banks.
    /// </summary>
    get bankId(): number {
        return this.internalBankId;
    }

    /// <summary>
    /// ihe full bank name
    /// </summary>
    get name(): string {
        return this.internalName;
    }

    get bankNumbers(): BankNumber[] {
        return this.internalBankNumbers;
    }

    static get values(): Bank[] {

        const banks: Bank[] = new Array(this.anz, this.Asb, this.Bnz, this.Citibank, this.Hsbc, this.BankOfChina,
            this.Kiwibank, this.Tsb, this.Westpac, this.Other);

        return banks;

    }
    public static anz: Bank = new Bank(1, "ANZ", [BankNumber.one, BankNumber.four, BankNumber.six, BankNumber.eleven, BankNumber.twentyFive]);
    public static readonly Asb: Bank = new Bank(2, "ASB Bank", [BankNumber.twelve, BankNumber.twentyFour]);
    public static readonly Bnz: Bank = new Bank(3, "BNZ", [BankNumber.two, BankNumber.eight]);
    public static readonly Citibank: Bank = new Bank(4, "Citibank N.A.", [BankNumber.thirtyOne]);
    public static readonly Hsbc: Bank = new Bank(5, "HSBC New Zealand", [BankNumber.thirty]);
    public static readonly BankOfChina: Bank = new Bank(6, "Industrial and Commercial Bank of China (New Zealand) Ltd", [BankNumber.ten]);
    public static readonly Kiwibank: Bank = new Bank(7, "Kiwibank", [BankNumber.thirtyEight]);
    public static readonly Tsb: Bank = new Bank(8, "TSB Bank", [BankNumber.fifteen]);
    public static readonly Westpac: Bank = new Bank(9, "Westpac", [BankNumber.three, BankNumber.thirteen,
    BankNumber.fourteen, BankNumber.sixteen, BankNumber.seventeen, BankNumber.eighteen, BankNumber.nineteen, BankNumber.twenty,
    BankNumber.twentyOne, BankNumber.twentyTwo, BankNumber.twentyThree, BankNumber.twentySeven]);
    public static readonly Other: Bank = new Bank(10, "Other", [BankNumber.one, BankNumber.two, BankNumber.three, BankNumber.four, BankNumber.six,
        BankNumber.eight, BankNumber.nine, BankNumber.ten, BankNumber.eleven, BankNumber.twelve, BankNumber.thirteen, BankNumber.fourteen,
        BankNumber.fifteen, BankNumber.sixteen, BankNumber.seventeen, BankNumber.eighteen, BankNumber.nineteen, BankNumber.twenty,
        BankNumber.twentyOne, BankNumber.twentyTwo, BankNumber.twentyThree, BankNumber.twentyFour, BankNumber.twentyFive,
        BankNumber.twentySix, BankNumber.twentySeven, BankNumber.twentyEight, BankNumber.twentyNine, BankNumber.thirty,
        BankNumber.thirtyOne, BankNumber.thirtyThree, BankNumber.thirtyFive, BankNumber.thirtyEight]);

    /// <summary>
    /// is the bank number valid for the specified bank.
    /// </summary>
    /// <param name="bankId">The bank id</param>
    /// <param name="bankNumber">The bank number</param>
    /// <returns>true/false</returns>
    public static isBankNumberValid(bankId: number, bankNumber: number): boolean {
        const bank: (Bank|undefined) = this.getBank(bankId);

        return bank ? bank.isBankNumberValid(bankNumber) : false;
    }

    /// <summary>
    /// is the branch number valid for the bank & bank number
    /// </summary>
    /// <param name="bankId">The bank id</param>
    /// <param name="bankNumber">The bank number</param>
    /// <param name="branchNumber">The branch number</param>
    /// <returns>true/false</returns>
    public static isBranchNumberValid(bankId: number, bankNumber: number, branchNumber: number): boolean {
        const bank: (Bank|undefined) = this.getBank(bankId);

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
    public static isAccountNumberValid(bankId: number, bankNumber: number, branchNumber: number, accountNumber: number, suffix: number): boolean {

        const bank: (Bank|undefined) = this.getBank(bankId);

        if (!bank) {
            return false;
        }
        const bankNumberInstance: BankNumber | undefined = bank.getBankNumber(bankNumber);

        if (bankNumberInstance) {
            const formattedBankAccount: string = this.getFormattedBankAccount(bankNumber, branchNumber, accountNumber, suffix);

            return  bankNumberInstance.isFormattedAccountNumberValid(formattedBankAccount);
        } else {
            return false;
        }
    }

    public static isValid(bankAccount : string):boolean{

        if(!bankAccount) {
        return false;
        }

        let isBankAccountValid = false;

        for(const bank of this.values)
        {
            const result = Bank.isBankAccountNumberValid(bank.bankId, bankAccount);

            if(result)
            {
                isBankAccountValid = result;
                break;
            }
        }      

        return isBankAccountValid;
    }

    public static isBankAccountNumberValid(bankId: number, bankAccount: string): boolean {

        if (!bankAccount || !bankId) {
            return false;
        }

        const split = bankAccount.split("-");

        if (split.length !== 4) {

            return false;
        }

        const bankNumber = parseInt(split[0], 10);
        const branch = parseInt(split[1], 10);
        const account = parseInt(split[2], 10);
        const suffix = parseInt(split[3], 10);

        return Bank.isAccountNumberValid(bankId, bankNumber, branch, account, suffix);

    }

    /// <summary>
    /// get the bank by the bank id.
    /// </summary>
    /// <param name="bankId">the bank id.</param>
    /// <returns>The bank or null if it cannot be found</returns>

    public static getBank(bankId: number): Bank | undefined {
        const banks: Bank[] = this.values.filter(x => x.bankId === bankId);

        let bank: Bank | undefined;

        if (banks && banks.length > 0) {
            bank = banks[0];
        }

        return bank;
    }

    private static getFormattedBankAccount(bankNumber: number, branchNumber: number, accountNumber: number, suffix: number): string {

        // tslint:disable-next-line:max-line-length
        return `${bankNumber.toString().padStart(2, "0")}${branchNumber.toString().padStart(4, "0")}-${accountNumber.toString().padStart(7, "0")}-${suffix.toString().padStart(3, "0")}`;
    }
    private internalBankId: number;
    private internalName: string;
    private internalBankNumbers: BankNumber[];

    constructor(bankId: number, name: string, bankNumbers: BankNumber[]) {
        this.internalBankId = bankId;
        this.internalName = name;
        this.internalBankNumbers = bankNumbers;
    }

    private isBankNumberValid(bankNumber: number): boolean {
        const bankNumbers: BankNumber[] = this.internalBankNumbers.filter(n => n.value === bankNumber);

        return bankNumbers && bankNumbers.length > 0;
    }

    private isBranchNumberValid(bankNumber: number, branchNumber: number): boolean {
        const foundBankNumber: BankNumber| undefined = this.getBankNumber(bankNumber);

        return foundBankNumber != null && foundBankNumber.containsBranchNumber(branchNumber);
    }

    private getBankNumber(bankNumber: number): BankNumber | undefined {

        const bankNumbers: BankNumber[] = this.bankNumbers.filter(n => n.value === bankNumber);

        let bankNumberInstance: BankNumber | undefined;

        if (bankNumbers && bankNumbers.length > 0) {
            bankNumberInstance = bankNumbers[0];
        }

        return bankNumberInstance;
    }
}
