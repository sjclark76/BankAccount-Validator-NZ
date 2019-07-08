import { Modulus11AlgorithmBase } from "./modulus11AlgorithmBase";
export class AlgorithmE extends Modulus11AlgorithmBase {
  protected weightings?: number[] | undefined = [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 3, 2, 0, 0, 1];
  protected modulus?: number | undefined = 11;
}
