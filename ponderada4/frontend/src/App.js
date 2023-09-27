import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const Dashboard = () => {
  const [inputs, setInputs] = useState(Array(3).fill(''));
  const [selectedOption, setSelectedOption] = useState(''); 

  const handleInputChange = (e, index) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = e.target.value;
    setInputs(updatedInputs);
  };

  const handleDropdownChange = (e, index) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = e.target.value;
    setInputs(updatedInputs);
    setSelectedOption(e.target.value);
  };

  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3']; 

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="input-grid">
        {inputs.map((value, index) => (
          <div key={index} className="input-container">
            <input
              type="text"
              value={value}
              onChange={(e) => handleInputChange(e, index)}
              placeholder={`Input ${index + 1}`}
            />
            <select
              value={selectedOption}
              onChange={(e) => handleDropdownChange(e, index)}
            >
              <option value="">Select an option</option>
              {dropdownOptions.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

// Constante que guarda os filtros das tasks 
const FILTER_MAP = {
};

function App(props){

  return (
    <div className="">
      <h1>Predição de views no youtube</h1>
  <div className="side-by-side">
  <form >
        <input
          id="name"
          value=""
          onChange=""
          type="text"
        />
        <input
          id="name"
          value=""
          onChange=""
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
  </div>
  <Dashboard></Dashboard>
    </div>
  );
}

export default App;
