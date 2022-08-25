import "./Balance.css";

function Title(props) {
  return (
    <div className="title">
      <h4>YOUR BALANCE</h4>
      <h1 className="value">${Number(props.value).toFixed(2)}</h1>
    </div>
  );
}
function DisplayColumn(props) {
  const ColorClass = props.title == "INCOME" ? "green" : "red";
  return (
    <div className="column">
      <span className="title">{props.title}</span>
      <span className={"value " + ColorClass}>${Number(props.value).toFixed(2)}</span>
    </div>
  );
}
function Display(props) {
  return (
    <div className="display">
      <DisplayColumn title="INCOME" value={props.income} />
      <DisplayColumn title="EXPENSE" value={props.expense} />
    </div>
  );
}
function Balance(props) {
  let income = 0;
  let expense = 0;
  props.transactions.forEach((obj) => {
    let amount = Number(obj.amount);
    amount > 0 ? (income += amount) : (expense += Math.abs(amount));
  });
  return (
    <div className="Balance">
      <Title value={income - expense} />
      <Display income={income} expense={expense} />
    </div>
  );
}
export default Balance;
