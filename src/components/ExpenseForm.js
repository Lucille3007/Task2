
import "./ExpenseForm.css"
import React , {useState} from "react"

function ExpenseForm(props) {
    
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleChangeHandler = (event) =>{
        console.log(event);
        setTitle(event.target.value);
    }

    const amountChangeHandler = (event) =>{
        console.log(event);
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) =>{
        console.log(event);
        setDate(event.target.value);
    }

    const submitHandler = (event) =>{

        event.preventDefault()
        
    /*    const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }

        props.items = props.items.concat(expenseData);
        */

        setTitle("")
        setAmount("")
        setDate("")
    }

    return (
        <form className="new-expense__controls" onSubmit={submitHandler}>
            <div> 
                <label> Title: </label>
                <input type="text" value={title} onChange={titleChangeHandler} />
            </div>
            <div>
                <label> Amount: </label>
                <input type="number" min="0.01" step="1" value={amount} onChange={amountChangeHandler} />
            </div>
            <div>
                <label> Date: </label>
                <input type="date" min="2019-01-01" value={date} onChange={dateChangeHandler} />
            </div>
            

            <button type="submit"> Add Expense </button>
        </form>
    )
}

export default ExpenseForm;