import { Modulus11AlgorithmBase } from "./modulus11AlgorithmBase";
export class AlgorithmD extends Modulus11AlgorithmBase {
  protected weightings?: number[] | undefined = [0, 0, 0, 0, 0, 0, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0];
  protected modulus?: number | undefined = 11;
}
