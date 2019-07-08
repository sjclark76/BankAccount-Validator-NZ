export declare abstract class Modulus11AlgorithmBase {
    protected abstract weightings?: number[];
    protected abstract modulus?: number;
    validate(formattedAccountNumber: string): boolean;
}
