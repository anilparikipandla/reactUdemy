import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredExpType, setEnteredExpType] = useState('');

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   });

  const titleChangeHandler = (event) => {
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // }); // if we need to use prev state to set current state value then we need to use function
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredDate: event.target.value });
    setEnteredDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
    setEnteredAmount(event.target.value);
  };

  const expTypeChangeHandler = (event) => {
    setEnteredExpType(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      exptype: enteredExpType,
    };

    props.onSaveExpenseData(expenseData);
    setShowNewExpenseForm(false);
    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredExpType('');
  };

  const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);

  const onCancelHandler = () => {
    setShowNewExpenseForm(false);
  };

  const onNewExpenseHandler = () => {
    setShowNewExpenseForm(true);
  };

  if (!showNewExpenseForm) {
    return (
      <button type='button' onClick={onNewExpenseHandler}>
        Add Expense
      </button>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={enteredAmount}
            onChange={amountChangeHandler}
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            value={enteredDate}
            onChange={dateChangeHandler}
            min='2019-01-01'
            max='2022-12-31'
          />
        </div>
        <div className='new-expense__control'>
          <label>Expense Type</label>
          <input
            type='text'
            value={enteredExpType}
            onChange={expTypeChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
        <button type='button' onClick={onCancelHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
