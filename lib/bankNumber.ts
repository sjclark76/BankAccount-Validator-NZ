import { Modulus11AlgorithmBase, AlgorithmA, AlgorithmD, AlgorithmE, AlgorithmF, AlgorithmG, AlgorithmX } from "./modulus11AlgorithmBase";
import { NumberRange } from "./numberRange";

export class BankNumber {
    private _algorithm: Modulus11AlgorithmBase;
    public value: number;
    private _ranges: NumberRange[]

    private constructor(bankNumber: number, algorithm: Modulus11AlgorithmBase, ranges: NumberRange[]) {
        this._algorithm = algorithm;
        this.value = bankNumber;
        this._ranges = ranges;
    }

    public containsBranchNumber(branchNumber: number): boolean {
        return this._ranges.some(numberRange => branchNumber >= numberRange.start && branchNumber <= numberRange.end);
    }

    public static one: BankNumber = new BankNumber(1, new AlgorithmA(), [new NumberRange(1, 999), new NumberRange(1100, 1199), new NumberRange(1800, 1899)]);
    public static two: BankNumber = new BankNumber(2, new AlgorithmA(), [new NumberRange(1, 999), new NumberRange(1200, 1299)]);
    public static three = new BankNumber(3, new AlgorithmA(), [new NumberRange(1, 999), new NumberRange(1300, 1399), new NumberRange(1500, 1599), new NumberRange(1700, 1799), new NumberRange(1900, 1999)]);
    public static four = new BankNumber(4, new AlgorithmA(), [new NumberRange(2020, 2024)]);
    public static six = new BankNumber(6, new AlgorithmA(), [new NumberRange(1, 999), new NumberRange(1400, 1499)]);
    public static eight = new BankNumber(8, new AlgorithmD(), [new NumberRange(6500, 6599)]);
    public static nine = new BankNumber(9, new AlgorithmE(), [new NumberRange(0, 0)]);
    public static ten = new BankNumber(10, new AlgorithmA(), [new NumberRange(5165, 5169)]);
    public static eleven = new BankNumber(11, new AlgorithmA(), [new NumberRange(5000, 6499), new NumberRange(6600, 8999)]);
    public static twelve = new BankNumber(12, new AlgorithmA(), [new NumberRange(3000, 3299), new NumberRange(3400, 3600), new NumberRange(3600, 3699)]);
    public static thirteen = new BankNumber(13, new AlgorithmA(), [new NumberRange(4900, 4999)]);
    public static fourteen = new BankNumber(14, new AlgorithmA(), [new NumberRange(4700, 4799)]);
    public static fifteen = new BankNumber(15, new AlgorithmA(), [new NumberRange(3900, 3999)]);
    public static sixteen = new BankNumber(16, new AlgorithmA(), [new NumberRange(4400, 4499)]);
    public static seventeen = new BankNumber(17, new AlgorithmA(), [new NumberRange(3300, 3399)]);
    public static eighteen = new BankNumber(18, new AlgorithmA(), [new NumberRange(3500, 3599)]);
    public static nineteen = new BankNumber(19, new AlgorithmA(), [new NumberRange(4600, 4649)]);
    public static twenty = new BankNumber(20, new AlgorithmA(), [new NumberRange(4100, 4199)]);
    public static twentyOne = new BankNumber(21, new AlgorithmA(), [new NumberRange(4800, 4899)]);
    public static twentyTwo = new BankNumber(22, new AlgorithmA(), [new NumberRange(4000, 4099)]);
    public static twentyThree = new BankNumber(23, new AlgorithmA(), [new NumberRange(3700, 3799)]);
    public static twentyFour = new BankNumber(24, new AlgorithmA(), [new NumberRange(4300, 4349)]);
    public static twentyFive = new BankNumber(25, new AlgorithmF(), [new NumberRange(2500, 2599)]);
    public static twentySix = new BankNumber(26, new AlgorithmG(), [new NumberRange(2600, 2699)]);
    public static twentySeven = new BankNumber(27, new AlgorithmA(), [new NumberRange(3800, 3849)]);
    public static twentyEight = new BankNumber(28, new AlgorithmG(), [new NumberRange(2100, 2149)]);
    public static twentyNine = new BankNumber(29, new AlgorithmG(), [new NumberRange(2150, 2299)]);
    public static thirty = new BankNumber(30, new AlgorithmA(), [new NumberRange(2900, 2949)]);
    public static thirtyOne = new BankNumber(31, new AlgorithmX(), [new NumberRange(2800, 2849)]);
    public static thirtyThree = new BankNumber(33, new AlgorithmF(), [new NumberRange(6700, 6799)]);
    public static thirtyFive = new BankNumber(35, new AlgorithmA(), [new NumberRange(2400, 2499)]);
    public static thirtyEight = new BankNumber(38, new AlgorithmA(), [new NumberRange(9000, 9499)]);

    public isFormattedAccountNumberValid(formattedAccountNumber: string): boolean {
        return this._algorithm.validate(formattedAccountNumber);
    }
}