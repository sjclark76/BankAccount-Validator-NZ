export declare abstract class Modulus11AlgorithmBase {
    protected weightings?: number[];
    protected modulus?: number;
    validate(formattedAccountNumber: string): boolean;
}
export declare class AlgorithmA extends Modulus11AlgorithmBase {
    _weightings: number[];
    _modulus: number;
}
export declare class AlgorithmD extends Modulus11AlgorithmBase {
    _weightings: number[];
    _modulus: number;
}
export declare class AlgorithmE extends Modulus11AlgorithmBase {
    _weightings: number[];
    _modulus: number;
}
export declare class AlgorithmF extends Modulus11AlgorithmBase {
    _weightings: number[];
    _modulus: number;
}
export declare class AlgorithmG extends Modulus11AlgorithmBase {
    _weightings: number[];
    _modulus: number;
}
export declare class AlgorithmX extends Modulus11AlgorithmBase {
    _weightings: number[];
    _modulus: number;
}
