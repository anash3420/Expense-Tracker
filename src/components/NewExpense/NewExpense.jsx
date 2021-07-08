import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function  NewExpense(props) {

    const [isEditing, setEditing] = useState(false);
    function submitDataHandler(enteredExpenseData){
        const ExpenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random()*10000).toString()
        };
        props.onAddExpense(ExpenseData);
    }

    function clickHandler(){
        setEditing(true);
    }
    function stopEditingHandler(){
        setEditing(false);
    }
    return <div className="new-expense">
    {!isEditing && <button onClick={clickHandler}> Add Expense</button>}
    {isEditing && <ExpenseForm onSubmitExpenseData={submitDataHandler} onCancel={stopEditingHandler}/>}
    </div>
}

export default NewExpense;