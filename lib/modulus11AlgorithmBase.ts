export abstract class Modulus11AlgorithmBase {
	protected abstract weightings?: number[];
	protected abstract modulus?: number;

	validate(formattedAccountNumber: string): boolean {

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

export class AlgorithmA extends Modulus11AlgorithmBase {
	protected weightings?: number[] | undefined = [0, 0, 6, 3, 7, 9, 0, 10, 5, 8, 4, 2, 1, 0, 0, 0];
	protected modulus?: number | undefined = 11;
}
export class AlgorithmD extends Modulus11AlgorithmBase {
	protected weightings?: number[] | undefined = [0, 0, 0, 0, 0, 0, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0];
	protected modulus?: number | undefined = 11;
}
export class AlgorithmE extends Modulus11AlgorithmBase {
	protected weightings?: number[] | undefined = [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 3, 2, 0, 0, 1];
	protected modulus?: number | undefined= 11;
}
export class AlgorithmF extends Modulus11AlgorithmBase {
	protected weightings?: number[] | undefined = [0, 0, 0, 0, 0, 0, 1, 7, 3, 1, 7, 3, 1, 0, 0, 0];
	protected modulus?: number | undefined = 10;
}
export class AlgorithmG extends Modulus11AlgorithmBase {
	protected weightings?: number[] | undefined = [0, 0, 0, 0, 0, 0, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];
	protected modulus?: number | undefined = 10;
}
export class AlgorithmX extends Modulus11AlgorithmBase {
	protected weightings?: number[] | undefined = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	protected modulus?: number | undefined = 1;
}