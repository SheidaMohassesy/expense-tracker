import React, { useEffect, useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredExpenses, setFilteredExpenses] = useState(props.items);
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    applyYearFilter('all');
  }, [props.items]);

  const applyYearFilter = (year) => {
    const filterRule = (item) => {
      const date = new Date(item.date);
      return year === 'all' || date.getFullYear().toString() === year;
    };

    const filtered = props.items.filter(filterRule);
    setFilteredExpenses(filtered);
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearFilterChange={applyYearFilter}
          selectedYear={selectedYear}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
