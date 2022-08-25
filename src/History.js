import "./History.css";
import Header from "./Header";

function TransactionValue(props) {
  let sign = "+";
  let colorClass = "green-back";
  if (Number(props.value) < 0) {
    sign = "-";
    colorClass = "red-back";
  }
  return (
    <div className="transaction-value">
      <div
        className="body"
        onClick={() => props.handleDel({ title: props.title, amount: props.value })}
      >
        <span className="title">{props.title}</span>
        <span className="value">{sign + props.value}</span>
      </div>
      <div className={"status " + colorClass} />
    </div>
  );
}
function History(props) {
  return (
    <div className="History">
      <Header value="History" />
      {props.transactions.map((obj, index) => (
        <TransactionValue
          key={index}
          value={obj.amount}
          title={obj.title}
          handleDel={props.handleDel}
        />
      ))}
    </div>
  );
}

export default History;
