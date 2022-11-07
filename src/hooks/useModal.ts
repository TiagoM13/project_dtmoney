import { isTransactionModal } from "../store/index";

export const useModaState = () => {
  return isTransactionModal.useState((s) => s.state);
};
