import { useState } from "react";
import "./ExpenseForm.css"

function ExpenseForm(props) {

    const [Title, setTitle] = useState('');
    const [Amount, setAmount] = useState('');
    const [Date, setDate] = useState('');

    const TitleChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    const AmountChangeHandler = (event) => {
        setAmount(event.target.value);
    }
    const DateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        const expenseData = {
            title: Title,
            amount: +Amount,
            date: new window.Date(Date)
        };

        props.onSubmitExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={Title} onChange={TitleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={Amount} onChange={AmountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-10-31" value={Date} onChange={DateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;