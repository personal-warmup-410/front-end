import axios from 'axios';

const API_GATEWAY_URL = 'https://personal-warmup-gateway.azure-api.net/routeMessage';

export const sendRequestToAzureFunction = async (messageID: number, data: any): Promise<any> => {
  const payload = JSON.stringify({ messageID, data });
  try {
    const response = await axios.post(API_GATEWAY_URL, payload, {
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
