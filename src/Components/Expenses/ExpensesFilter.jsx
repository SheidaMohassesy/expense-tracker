import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({ onYearFilterChange }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const onFilterItemChangeHandler = (event) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
    onYearFilterChange(selectedOption);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedValue} onChange={onFilterItemChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
