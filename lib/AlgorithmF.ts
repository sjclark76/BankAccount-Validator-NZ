import { Modulus11AlgorithmBase } from "./modulus11AlgorithmBase";
export class AlgorithmF extends Modulus11AlgorithmBase {
  protected weightings?: number[] | undefined = [0, 0, 0, 0, 0, 0, 1, 7, 3, 1, 7, 3, 1, 0, 0, 0];
  protected modulus?: number | undefined = 10;
}
