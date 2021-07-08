import Expenseitem from "./ExpenseItem";

function ExpensesList(props) {
    if (props.items.length === 0){
        return <p>No items Found!</p>;
    }    
    return (
        props.items.map( expense =>(
            <Expenseitem 
            key={expense.id}
            title={expense.title}
            date={expense.date}
            expense={expense.amount}
        />
        ))
        
    )
}

export default ExpensesList;