import axios from 'axios';

const FUNCTION_API_URL = 'https://warmup-ep-1.azurewebsites.net/api/HttpTrigger2?code=B9LG_GjmcBe3egygT67T9EaIYT46nYeIctrN_vysx5zZAzFu6sWLzA==';

export const submitNameToAzureFunction = async (name: string) => {
  const payload = JSON.stringify({ "name": name });
  try {
    const response = await axios.post(FUNCTION_API_URL, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    return response.data;
  } catch (error) {
    console.error('Error calling Azure Function:', error);
    throw error;
  }
};
