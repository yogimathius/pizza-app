import React, { useState } from 'react';
import DropdownList from './DropdownList';
import RadioButtonsPage from './RadioButtonsPage';

const TotalPage: React.FC = () => {
  const [grandTotal, setGrandTotal] = useState<number>(0);

  const handleDropdownTotalChange = (dropdownTotal: number) => {
    setGrandTotal((prevTotal) => prevTotal + dropdownTotal);
  };

  const handleRadioButtonsTotalChange = (radioTotal: number) => {
    setGrandTotal((prevTotal) => prevTotal + radioTotal);
  };

  return (
    <div>
      <h1>Total Page</h1>
      <DropdownList onTotalChange={handleDropdownTotalChange} />
      <RadioButtonsPage onTotalChange={handleRadioButtonsTotalChange} />
      <p>Grand Total: {grandTotal}</p>
    </div>
  );
};

export default TotalPage;