import { Modulus11AlgorithmBase } from "./modulus11AlgorithmBase";
export class AlgorithmG extends Modulus11AlgorithmBase {
  protected weightings?: number[] | undefined = [0, 0, 0, 0, 0, 0, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];
  protected modulus?: number | undefined = 10;
}
