import { isTransactionModal } from "./index";

export const handleOpenNewTransaction = () => {
  isTransactionModal.update((s) => {
    s.state = true
  });
}

export const handleCloseNewTransaction = () => {
  isTransactionModal.update((s) => {
    s.state = false
  });
}
