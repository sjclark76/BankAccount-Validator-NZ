import { Bank } from "./bank";

export * from "./bank";

export function isBankAccountValid(bankId: number, bankNumber: number,
                                   branchNumber: number, accountNumber: number, suffix: number): boolean {
  const isValid: boolean = Bank.isAccountNumberValid(bankId, bankNumber, branchNumber, accountNumber, suffix);

  return isValid;
}

export function isBankAccountNumberValid(bankId: number, bankNumber: string): boolean {
  const isValid: boolean = Bank.isBankAccountNumberValid(bankId, bankNumber);

  return isValid;
}


