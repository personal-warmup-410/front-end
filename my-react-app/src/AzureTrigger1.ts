import axios from 'axios';

const FUNCTION_API_URL = 'https://warmup-ep-1.azurewebsites.net/api/HttpTrigger1?code=Jyk7OEo_0xKLRkHrRoYXLHSMPjxM0VBt_EzJrsUuNDfzAzFu8Pp3Dg==';

export const callAzureFunction = async (): Promise<any> => {
  try {
    const response = await axios.get(FUNCTION_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error calling Azure Function:', error);
    throw error;
  }
};
