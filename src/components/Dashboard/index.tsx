import React from "react";

import { Summary } from "components/Summary";
import { Transaction } from "components/Transaction";

import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <Transaction />
    </Container>
  );
}
