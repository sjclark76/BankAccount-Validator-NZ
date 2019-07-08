export abstract class Modulus11AlgorithmBase {
  protected abstract weightings?: number[];
  protected abstract modulus?: number;

  public validate(formattedAccountNumber: string): boolean {

    const accountNumber : string = formattedAccountNumber.replace(new RegExp("-", "g"), "");

    if (!this.weightings || this.weightings.length !== 16) {
      throw new Error("Invalid weightings");
    }

    if (!this.modulus) {
      throw new Error("modulus not defined");
    }
    if (accountNumber.length !== 16) {
      throw new Error(`Invalid Bank Account Format '${formattedAccountNumber}' ${accountNumber}`);
    }

    let total : number = 0;
    for (let i :number = 0; i < accountNumber.length; i++) {
      const value :number= +accountNumber.substring(i, i+1);
      const weighting :number= this.weightings[i];
      const weightedValue :number = value * weighting;
      total += weightedValue;
    }
    return total % this.modulus === 0;
  }
}

