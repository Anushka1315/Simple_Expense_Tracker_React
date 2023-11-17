import React from "react";
import "./styles.css";
import { Balance } from "./components/balance";
import { Header } from "./components/header";
import { IncomeExpenses } from "./components/incomeExpenses";
import { TransactionList } from "./components/transactionList";
import { AddTransaction } from "./components/addTransaction";
import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

//export default App;
