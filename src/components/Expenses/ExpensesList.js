import ExpenseItem from './ExpenseItem';
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((eachExpense) => (
        <ExpenseItem
          key={eachExpense.id}
          title={eachExpense.title}
          amount={eachExpense.amount}
          date={eachExpense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
