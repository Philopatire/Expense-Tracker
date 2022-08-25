import "./App.css";
import Balance from "./Balance";
import History from "./History";
import Transaction from "./Transaction";
import { useEffect, useState } from "react";

function App() {
  let localData = JSON.parse(localStorage.getItem("expense-tracker"));
  const [transactions, setTransaction] = useState(localData ? localData : []);

  function handleAddTransaction(obj) {
    let transactionsCopy = [...transactions];
    transactionsCopy.push(obj);
    setTransaction(transactionsCopy);
  }

  function handleDeleteTransaction(obj) {
    let transactionIndex = transactions.findIndex((value) => {
      return obj.name === value.name && obj.amount === value.amount;
    });

    let transactionsCopy = [...transactions];
    transactionsCopy.splice(transactionIndex, 1);
    setTransaction(transactionsCopy);
  }

  useEffect(() => {
    localStorage.setItem("expense-tracker", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="App">
      <h3 className="title">Expense Tracker</h3>
      <Balance transactions={transactions} />
      <History transactions={transactions} handleDel={handleDeleteTransaction} />
      <Transaction handleAdd={handleAddTransaction} />
    </div>
  );
}

export default App;
