import React from "react";

import { Summary } from "components/Summary";
import { Transaction } from "components/Transaction";

import { Container } from "./styles";

export const Dashboard = () => {
  return (
    <Container>
      <Summary />
      <Transaction />
    </Container>
  );
};
