import "../../App.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2021');
    function FilterChangeHandler(selectedYear){
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter ( expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={FilterChangeHandler}/>
            <ExpenseChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
