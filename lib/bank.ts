import { BankNumber } from "./bankNumber";

export class Bank {
    public static anz: Bank = new Bank(1, "ANZ", [BankNumber.one, BankNumber.four, BankNumber.six, BankNumber.eleven, BankNumber.twentyFive]);
    public static readonly Asb: Bank = new Bank(2, "ASB Bank", [BankNumber.twelve, BankNumber.twentyFour]);
    public static readonly Bnz: Bank = new Bank(3, "BNZ", [BankNumber.two, BankNumber.eight]);
    public static readonly Citibank: Bank = new Bank(4, "Citibank N.A.", [BankNumber.thirtyOne]);
    public static readonly Hsbc: Bank = new Bank(5, "HSBC New Zealand", [BankNumber.thirty]);
    public static readonly BankOfChina: Bank = new Bank(6, "Industrial and Commercial Bank of China (New Zealand) Ltd", [BankNumber.ten]);
    public static readonly Kiwibank: Bank = new Bank(7, "Kiwibank", [BankNumber.thirtyEight]);
    public static readonly Tsb: Bank = new Bank(8, "TSB Bank", [BankNumber.fifteen]);
    public static readonly Westpac: Bank = new Bank(9, "Westpac", [BankNumber.three, BankNumber.thirteen, BankNumber.fourteen, BankNumber.sixteen, BankNumber.seventeen, BankNumber.eighteen, BankNumber.nineteen, BankNumber.twenty, BankNumber.twentyOne, BankNumber.twentyTwo, BankNumber.twentyThree, BankNumber.twentySeven]);
    public static readonly Other: Bank = new Bank(10, "Other", [BankNumber.one, BankNumber.two, BankNumber.three, BankNumber.four, BankNumber.six, BankNumber.eight, BankNumber.nine, BankNumber.ten, BankNumber.eleven, BankNumber.twelve, BankNumber.thirteen, BankNumber.fourteen, BankNumber.fifteen, BankNumber.sixteen, BankNumber.seventeen, BankNumber.eighteen,
    BankNumber.nineteen, BankNumber.twenty, BankNumber.twentyOne, BankNumber.twentyTwo, BankNumber.twentyThree, BankNumber.twentyFour, BankNumber.twentyFive, BankNumber.twentySix, BankNumber.twentySeven, BankNumber.twentyEight, BankNumber.twentyNine, BankNumber.thirty, BankNumber.thirtyOne, BankNumber.thirtyThree, BankNumber.thirtyFive, BankNumber.thirtyEight]);
    _bankId: number;
    _name: string;
    _bankNumbers: BankNumber[];

    constructor(bankId: number, name: string, bankNumbers: BankNumber[]) {
        this._bankId = bankId;
        this._name = name;
        this._bankNumbers = bankNumbers;
    }

    /// <summary>
    ///     Internal id for uniquely identifying Banks.
    /// </summary>
    public get bankId(): number {
        return this._bankId;
    }

    /// <summary>
    /// The full bank name
    /// </summary>
    public get name(): string {
        return this._name;
    }

    public get bankNumbers(): BankNumber[] {
        return this._bankNumbers;
    }

    /// <summary>
    /// Is the bank number valid for the specified bank.
    /// </summary>
    /// <param name="bankId">The bank id</param>
    /// <param name="bankNumber">The bank number</param>
    /// <returns>true/false</returns>
    public static isBankNumberValid(bankId: number, bankNumber: number): boolean {
        var bank = this.getBank(bankId);

        return bank ?  bank.isBankNumberValid(bankNumber) : false;
    }

    /// <summary>
    /// Is the branch number valid for the bank & bank number
    /// </summary>
    /// <param name="bankId">The bank id</param>
    /// <param name="bankNumber">The bank number</param>
    /// <param name="branchNumber">The branch number</param>
    /// <returns>true/false</returns>
    public static isBranchNumberValid( bankId :number, bankNumber: number, branchNumber: number):boolean {
        var bank = this.getBank(bankId);
               
        return  bank ? bank.isBranchNumberValid(bankNumber, branchNumber) : false;
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
    public static isAccountNumberValid(bankId :number, bankNumber:number, branchNumber:number, accountNumber:number,  suffix:number):boolean {
        var bank = this.getBank(bankId);

        if (bank == null) return false;

        var formattedBankAccount = this.getFormattedBankAccount(bankNumber, branchNumber, accountNumber, suffix);

        var bankNumberInstance = bank.getBankNumber(bankNumber);

        return bankNumberInstance != null && bankNumberInstance.isFormattedAccountNumberValid(formattedBankAccount);
    }

    /// <summary>
    /// Get the bank by the bank id. 
    /// </summary>
    /// <param name="bankId">the bank id.</param>
    /// <returns>The bank or null if it cannot be found</returns>

    public static getBank(bankId: number): Bank| undefined {
        var banks =  this.values.filter(x => x.bankId == bankId);

        let bank: Bank | undefined  = undefined;

        if(banks && banks.length > 0)
        {
            bank = banks[0];
        }

        return bank;
    }
 
    private isBankNumberValid(bankNumber: number) :boolean {
        let bankNumbers = this._bankNumbers.filter(number => number.value == bankNumber);

        return bankNumbers && bankNumbers.length > 0;
    }

    private isBranchNumberValid(bankNumber:number, branchNumber:number):boolean {
        var foundBankNumber = this.getBankNumber(bankNumber);

        return foundBankNumber != null && foundBankNumber.containsBranchNumber(branchNumber);
    }

    private getBankNumber(bankNumber: number):BankNumber | undefined{

        var bankNumbers =  this.bankNumbers.filter(number => number.value == bankNumber);

        let bankNumberInstance: BankNumber | undefined  = undefined;

        if(bankNumbers && bankNumbers.length > 0)
        {
            bankNumberInstance = bankNumbers[0];
        }

        return bankNumberInstance;
    }

    public static get values(): Bank[] {

        let banks: Bank[] = new Array(this.anz, this.Asb, this.Bnz, this.Citibank, this.Hsbc, this.BankOfChina, this.Kiwibank, this.Tsb, this.Westpac, this.Other);

        return banks;

    }

    private static getFormattedBankAccount(bankNumber:number, branchNumber:number, accountNumber:number, suffix:number):string
{
    return 'asdf';
    // return `${bankNumber:00}${branchNumber:0000}-${accountNumber:0000000}-${suffix:000}`;
}
    }