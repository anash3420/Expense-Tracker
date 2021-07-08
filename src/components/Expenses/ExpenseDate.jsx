function ExpenseDate(props) {
    const month=props.date.toLocaleString('default', { month: 'long' });
    const day=props.date.getDate();    
    const year=props.date.getFullYear();

    return(
        <div className="col-2 date expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <h5 className="expense-date__day">{day}</h5>
          </div>
    )
    
}
export default ExpenseDate;