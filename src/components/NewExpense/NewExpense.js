import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const [editing, setEditing] = useState(false);
    
    const ExpenseDataHandler = (enteredExpenseData) =>{
       const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setEditing(false)
    };

    const editingHandler = () =>{
        setEditing(true);
    }

    const stopEditing =() =>{
        setEditing(false)
    }

  return (
    <div className='new-expense'>
        {!editing && <button type='button' onClick={editingHandler}>Add Expense</button>}
        {editing && <ExpenseForm onSaveExpenseData={ExpenseDataHandler} onCancel={stopEditing}/>} 
    </div>
  )
}

export default NewExpense