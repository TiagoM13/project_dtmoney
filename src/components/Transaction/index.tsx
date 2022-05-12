import { useEffect } from "react"
import { api } from "../../services/api";
import { Container } from "./styles"

export const Transaction = () => {
  useEffect(() => {
    api("/transactions")
      .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th> 
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Web Site</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>12/04/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$ -2.000</td>
            <td>Casa</td>
            <td>10/04/2022</td>
          </tr>
        </tbody> 
      </table>
    </Container>
  )
}