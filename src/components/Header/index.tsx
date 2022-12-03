import React from "react";

import logoImg from "assets/logo.svg";

import { handleOpenNewTransaction } from "store/actions";

import { Container, Content } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransaction}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};
