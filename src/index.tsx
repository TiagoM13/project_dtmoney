import React from "react";
import ReactDOM from "react-dom";

import { createServer, Model } from "miragejs";

import App from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Desenvolvedor Web",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2022-04-16 10:00:00"),
        },
        {
          id: 2,
          title: "Boleto de Deposito",
          type: "withdraw",
          category: "Pagamentos",
          amount: 700,
          createdAt: new Date("2022-04-22 12:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
