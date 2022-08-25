import "./Transaction.css";
import Header from "./Header";
import { useState } from "react";

function SubTitle(props) {
  return <h4 className="sub-title">{props.value}</h4>;
}
function Input(props) {
  return (
    <input
      className="input"
      type="text"
      onChange={(e) => props.handleAdd(e.target.value)}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
}
function InputField(props) {
  return (
    <div className="input-field">
      <SubTitle value={props.subTitle} />
      <Input placeholder={props.inputPlaceholder} value={props.value} handleAdd={props.handleAdd} />
    </div>
  );
}
function Transaction(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  function handleTitle(value) {
    setTitle(value);
  }
  function handleAmount(value) {
    setAmount(value);
  }
  function handleSubmit() {
    props.handleAdd({ title: title, amount: amount });
  }
  return (
    <div className="Transaction">
      <Header value="Add new transaction" />
      <InputField
        subTitle="Text"
        inputPlaceholder="Enter Text..."
        value={title}
        handleAdd={handleTitle}
      />
      <InputField
        subTitle="Amount"
        inputPlaceholder="Enter Amount..."
        value={amount}
        handleAdd={handleAmount}
      />
      <button className="submit-btn" onClick={handleSubmit}>
        Add transaction
      </button>
    </div>
  );
}

export default Transaction;
