import { Transaction } from "./transaction";

export type TransactionInput = Omit<Transaction, "id" | "createdAt">;

export interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}
