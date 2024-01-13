import React, { useState } from 'react';
import { sendRequestToAzureFunction } from './SendMessage'; 

const App: React.FC = () => {
  const [name, setName] = useState('');

  const callFunctionOne = async () => {
    try {
      const result = await sendRequestToAzureFunction(0, { name });
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const callFunctionTwo = async () => {
    try {
      const result = await sendRequestToAzureFunction(1, { name });
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>My React App</h1>
      <button onClick={callFunctionOne}>Call Azure Function 1</button>
      <div>
        <input type="text" value={name} onChange={handleInputChange} placeholder="Enter name" />
        <button onClick={callFunctionTwo}>Submit Name to Function 2</button>
      </div>
    </div>
  );
};

export default App;
