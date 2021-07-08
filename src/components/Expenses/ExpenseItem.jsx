import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function Expenseitem(props) {
    return(
        <Card className="row items">
          <ExpenseDate date={props.date} />
          <div className="col-8 title">
            <h5>{props.title}</h5>
          </div>
          <div className="col-2 expense-item__price">
            <h5>${props.expense}</h5>
          </div>
        </Card>
    );
}

export default Expenseitem;