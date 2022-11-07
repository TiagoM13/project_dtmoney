import { FormEvent, useState } from "react";
import Modal from "react-modal";

import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import closedImg from "../../assets/close.svg"

import { useTransactions } from "../../hooks/useTransactions";
import { useModaState } from "../../hooks/useModal";
import { handleCloseNewTransaction } from "../../store/actions";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

export function NewTransactionModal() {
  const { createTransaction } = useTransactions();
  const state = useModaState();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function hendleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    handleCloseNewTransaction();
  }

  return (
    <Modal
      isOpen={state}
      onRequestClose={handleCloseNewTransaction}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button
        type="button"
        onClick={handleCloseNewTransaction}
        className="react-modal-close"
      >
        <img src={closedImg} alt="fechar modal" />
      </button>

      <Container onSubmit={hendleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          defaultValue={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit'); }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw'); }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}