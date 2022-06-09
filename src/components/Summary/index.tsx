import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

import Income from "../../assets/income.svg";
import Outcome from "../../assets/outcome.svg";
import Total from "../../assets/total.svg";

import { Container } from './styles';

export const Summary = () => {
  const { transactions } = useContext(TransactionsContext);

  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === 'deposit') {
  //     return acc + transaction.amount;
  //   }

  //   return acc;
  // }, 0);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  });

  console.log(transactions);

  return (
    <div>
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={Income} alt="Entradas" />
          </header>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.deposits)}
          </strong>
        </div>
        <div>
          <header>
            <p>Saídas</p>
            <img src={Outcome} alt="Saídas" />
          </header>
          <strong>-
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.withdraws)}
          </strong>
        </div>
        <div className="background-green">
          <header>
            <p>Total</p>
            <img src={Total} alt="Total" />
          </header>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.total)}
          </strong>
        </div>
      </Container>
    </div>
  );
}
