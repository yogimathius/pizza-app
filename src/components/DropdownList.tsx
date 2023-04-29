import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
  numValue: number;
}

interface DropdownListProps {
    onTotalChange: (value: number) => void;
  }

const DropdownList: React.FC<DropdownListProps> = ({ onTotalChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    const selected = options.find((option) => option.value === event.target.value);
    onTotalChange(selected ? selected.numValue : 0);
  };

  const options: Option[] = [
    { value: '', label: 'Select an option', numValue: 0 },
    { value: 'option1', label: 'Option 1', numValue: 10 },
    { value: 'option2', label: 'Option 2', numValue: 20 },
    { value: 'option3', label: 'Option 3', numValue: 30 },
    // Add more options here if needed
  ];

//   const getSelectedOptionNumValue = () => {
//     const selected = options.find((option) => option.value === selectedOption);
//     return selected ? selected.numValue : 0;
//   };

  return (
    <div>
      <h1>Dropdown List</h1>
      <select value={selectedOption} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>Selected option: {selectedOption}</p>
      {/* <p>Total: {getSelectedOptionNumValue()}</p> */}
    </div>
  );
};

export default DropdownList;