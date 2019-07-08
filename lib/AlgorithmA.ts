import { Modulus11AlgorithmBase } from "./modulus11AlgorithmBase";
export class AlgorithmA extends Modulus11AlgorithmBase {
  protected weightings?: number[] | undefined = [0, 0, 6, 3, 7, 9, 0, 10, 5, 8, 4, 2, 1, 0, 0, 0];
  protected modulus?: number | undefined = 11;
}
