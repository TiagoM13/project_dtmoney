import React from "react";
import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hooks/useTransactions";
import { GlobalStyles } from "./styles/global";

Modal.setAppElement("#root");

const App = () => {
  return (
    <TransactionProvider>
      <Header />
      <Dashboard />
      <NewTransactionModal />
      <GlobalStyles />
    </TransactionProvider>
  );
};

export default App;
