export declare abstract class Modulus11AlgorithmBase {
    protected abstract weightings?: number[];
    protected abstract modulus?: number;
    validate(formattedAccountNumber: string): boolean;
}
export declare class AlgorithmA extends Modulus11AlgorithmBase {
    protected weightings?: number[] | undefined;
    protected modulus?: number | undefined;
}
export declare class AlgorithmD extends Modulus11AlgorithmBase {
    protected weightings?: number[] | undefined;
    protected modulus?: number | undefined;
}
export declare class AlgorithmE extends Modulus11AlgorithmBase {
    protected weightings?: number[] | undefined;
    protected modulus?: number | undefined;
}
export declare class AlgorithmF extends Modulus11AlgorithmBase {
    protected weightings?: number[] | undefined;
    protected modulus?: number | undefined;
}
export declare class AlgorithmG extends Modulus11AlgorithmBase {
    protected weightings?: number[] | undefined;
    protected modulus?: number | undefined;
}
export declare class AlgorithmX extends Modulus11AlgorithmBase {
    protected weightings?: number[] | undefined;
    protected modulus?: number | undefined;
}
