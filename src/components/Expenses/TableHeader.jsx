import Card from "../UI/Card";

function TableTitle() {
    return (
        <Card className="row header">
          <div className="col-2">
            <h5>Date</h5>
          </div>
          <div className="col-8">
            <h5>Title</h5>
          </div>
          <div className="col-2">
            <h5>Expense</h5>
          </div>
        </Card>
    );
}

export default TableTitle;