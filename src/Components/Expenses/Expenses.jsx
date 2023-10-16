import React from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({ items, onYearFilterChange }) => {
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearFilterChange={onYearFilterChange} />
        {items.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
