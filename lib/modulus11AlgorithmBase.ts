export abstract class Modulus11AlgorithmBase {
	protected weightings?: number[];
	protected modulus?: number;

	validate(formattedAccountNumber: string): boolean {

		const accountNumber = formattedAccountNumber.replace('-', '');

		if (!this.weightings || this.weightings.length !== 16) {
			throw new Error('Invalid weightings');
		}

		if (!this.modulus) {
			throw new Error('modulus not defined')
		}
		if (accountNumber.length !== 16) {
			throw new Error(`Invalid Bank Account Format '${formattedAccountNumber}'`);
		}

		let total = 0;
		for (let i = 0; i < accountNumber.length; i++) {
			const value = +accountNumber.substring(i, 1);
			const weighting = this.weightings[i];
			const weightedValue = value * weighting;
			total += weightedValue;
		}
		return total % this.modulus === 0;
	}
}

export class AlgorithmA extends Modulus11AlgorithmBase {
	_weightings: number[] = [0, 0, 6, 3, 7, 9, 0, 10, 5, 8, 4, 2, 1, 0, 0, 0];
	_modulus: number = 11;
}
export class AlgorithmD extends Modulus11AlgorithmBase {
	_weightings: number[] = [0, 0, 0, 0, 0, 0, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0];
	_modulus: number = 11;
}
export class AlgorithmE extends Modulus11AlgorithmBase {
	_weightings: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 3, 2, 0, 0, 1];
	_modulus: number = 11;
}
export class AlgorithmF extends Modulus11AlgorithmBase {
	_weightings: number[] = [0, 0, 0, 0, 0, 0, 1, 7, 3, 1, 7, 3, 1, 0, 0, 0];
	_modulus: number = 10;
}
export class AlgorithmG extends Modulus11AlgorithmBase {
	_weightings: number[] = [0, 0, 0, 0, 0, 0, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];
	_modulus: number = 10;
}
export class AlgorithmX extends Modulus11AlgorithmBase {
	_weightings: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	_modulus: number = 1;
}