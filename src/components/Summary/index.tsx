import Income from "../../assets/income.svg";
import Outcome from "../../assets/outcome.svg";
import Total from "../../assets/total.svg";

import { Container } from './styles';

export const Summary = () => {
  return (
    <div>
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={Income} alt="Entradas" />
          </header>
          <strong>1000.00$</strong>
        </div>
        <div>
          <header>
            <p>Saídas</p>
            <img src={Outcome} alt="Saídas" />
          </header>
          <strong>- 500.00$</strong>
        </div>
        <div className="background-green">
          <header>
            <p>Total</p>
            <img src={Total} alt="Total" />
          </header>
          <strong>1000.00$</strong>
        </div>
      </Container>
    </div>
  );
}
