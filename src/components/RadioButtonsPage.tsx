import React, { useState } from 'react';


interface RadioButtonsPageProps {
    onTotalChange: (value: number) => void;
  }


  
const RadioButtonsPage: React.FC<RadioButtonsPageProps> = ({ onTotalChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
  const calculateTotal = (selectedOptions: string[]) => {
    return selectedOptions.reduce((total, optionValue) => {
      const option = options.find((option) => option.value === optionValue);
      return total + (option ? option.numValue : 0);
    }, 0);
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
  
    const updatedSelectedOptions = isChecked
      ? [...selectedOptions, value]
      : selectedOptions.filter((option) => option !== value);
  
    setSelectedOptions(updatedSelectedOptions);
  
    const newTotal = calculateTotal(updatedSelectedOptions);
    onTotalChange(newTotal);
  };

  const options = [
    { value: 'option1', label: 'Option 1', numValue: 1 },
    { value: 'option2', label: 'Option 2', numValue: 1 },
    { value: 'option3', label: 'Option 3', numValue: 1 },
    // Add more options here if needed
  ];

//   const getSelectedOptionNumValue = () => {
//     return selectedOptions.reduce((total, optionValue) => {
//       const option = options.find((opt) => opt.value === optionValue);
//       return total + (option ? option.numValue : 0);
//     }, 0);
//   };

  return (
    <div>
      <h1>Checkboxes Page</h1>
      <form>
        {options.map((option) => (
          <div key={option.value}>
            <label>
              <input
                type="checkbox"
                value={option.value}
                checked={selectedOptions.includes(option.value)}
                onChange={handleChange}
              />
              {option.label}
            </label>
          </div>
        ))}
      </form>
      <p>Selected options: {selectedOptions.join(', ')}</p>
      {/* <p>Total: {getSelectedOptionNumValue()}</p> */}
    </div>
  );
};

export default RadioButtonsPage