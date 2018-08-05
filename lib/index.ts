import { Bank } from './bank';


export function isBankAccountValid(bankId: number, bankNumber: number, branchNumber: number, accountNumber: number, suffix: number): boolean {
  const isValid = Bank.isAccountNumberValid(bankId, bankNumber, branchNumber, accountNumber, suffix);

  return isValid;
}

export * from './bank';