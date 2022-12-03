import { Store } from "pullstate";

export interface ITransactionModal {
  state: boolean;
}

export const isTransactionModal = new Store<ITransactionModal>({
  state: false,
});
