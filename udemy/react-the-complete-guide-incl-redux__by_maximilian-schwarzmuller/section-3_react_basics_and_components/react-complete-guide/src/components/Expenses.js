import ExpenseItem from './ExpenseItem';

import './Expenses.css';

function Expenses(props) {
  return (
    <div className='expenses'>
      {props.items.map((item) => (
        <ExpenseItem {...item} key={item.id}></ExpenseItem>
      ))}
    </div>
  );
}

export default Expenses;
