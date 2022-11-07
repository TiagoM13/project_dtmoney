import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyles } from "./styles/global";
import { TransactionProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  return (
    <TransactionProvider>
      <Header />
      <Dashboard />
      <NewTransactionModal />
      <GlobalStyles />
    </TransactionProvider>
  );
}
