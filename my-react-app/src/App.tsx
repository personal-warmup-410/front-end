import React, { useState } from 'react';
import { callAzureFunction } from './AzureTrigger1';
import { submitNameToAzureFunction } from './AzureTrigger2';

const App: React.FC = () => {
  const [name, setName] = useState(''); // State to store the input name

  const handleButtonClick = async () => {
    try {
      const result = await callAzureFunction();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Handle changes in the text field
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  // Function to call the Azure Function with the name
  const handleSubmit = async () => {
    try {
      const result = await submitNameToAzureFunction(name);
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>My React App</h1>
      <button onClick={handleButtonClick}>Call Azure Function</button>
      <div>
        <input type="text" value={name} onChange={handleInputChange} placeholder="Enter name" />
        <button onClick={handleSubmit}>Submit Name</button>
      </div>
    </div>
  );
};

export default App;
