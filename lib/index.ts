import { Bank } from "./bank";

export * from "./bank";

export function isValid(bankAccount: string) : boolean
{
  const isValidBankAccount : boolean = Bank.isValid(bankAccount);

  return isValidBankAccount;
}
export function isBankAccountValid(bankId: number, bankNumber: number,
                                   branchNumber: number, accountNumber: number, suffix: number): boolean {
  const isValidBankAccount: boolean = Bank.isAccountNumberValid(bankId, bankNumber, branchNumber, accountNumber, suffix);

  return isValidBankAccount;
}

export function isBankAccountNumberValid(bankId: number, bankNumber: string): boolean {
  const isValidBankAccount: boolean = Bank.isBankAccountNumberValid(bankId, bankNumber);

  return isValidBankAccount;
}


