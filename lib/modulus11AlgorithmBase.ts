export abstract class Modulus11AlgorithmBase {
	protected weightings?: number[];
	protected modulus?: number;

	validate(formattedAccountNumber: string): boolean {
		const accountNumber = 0;// Regex.Replace(formattedAccountNumber, '-', '');

		if (this.weightings.length !== 16) {
			throw new Error('Invalid weightings');
		}

		if (accountNumber.Length !== 16) {
			throw new Error(`Invalid Bank Account Format '${formattedAccountNumber}'`);
		}

		let total = 0;
		for (let i = 0; i < accountNumber.Length; i++) {
			const number = Number.parseInt(accountNumber.Substring(i, 1));
			const weighting = this.weightings[i];
			const weightedValue = number * weighting;
			total += weightedValue;
		}
		return total % this.modulus === 0;
	}
}

export class AlgorithmA extends  Modulus11AlgorithmBase
{
	_weightings: number[] = [0, 0, 6, 3, 7, 9, 0, 10, 5, 8, 4, 2, 1, 0, 0, 0];
	_modulus: number = 11;
	
}