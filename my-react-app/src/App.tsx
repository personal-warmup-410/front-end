import React from 'react';
import { callAzureFunction } from './AzureTrigger1';

const App: React.FC = () => {
  const handleButtonClick = async () => {
    try {
      const result = await callAzureFunction();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>My React App</h1>
      <button onClick={handleButtonClick}>Call Azure Function</button>
    </div>
  );
};

export default App;
