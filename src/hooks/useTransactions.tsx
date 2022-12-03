import React, { createContext, useContext, useEffect, useState } from "react";

import { Transaction } from "interfaces/transaction";
import {
  TransactionInput,
  TransactionsContextData,
} from "interfaces/transactionData";
import { TransactionsProvider } from "interfaces/transactionsProvider";

import { api } from "../services/api";

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionProvider({ children }: TransactionsProvider) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api("/transactions").then((response) =>
      setTransactions(response.data.transactions)
    );
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
