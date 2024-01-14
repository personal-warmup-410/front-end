import axios from 'axios';

const REACT_APP_API_GATEWAY_URL = process.env.REACT_APP_API_GATEWAY_URL || "";
const REACT_APP_SUBSCRIPTION_KEY = process.env.REACT_APP_SUBSCRIPTION_KEY || "";

export const sendRequestToAzureFunction = async (messageID: number, data: any): Promise<any> => {
  const payload = JSON.stringify({ "messageID": messageID, "data": data });
//   const payload = JSON.stringify(
//     {
//         "messageID": 0,
//         "data": {
//             "name": "test"
//         }
//     }
//   );
  console.log(payload);
  try {
    const response = await axios.post(REACT_APP_API_GATEWAY_URL, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': REACT_APP_SUBSCRIPTION_KEY,
        }
      });
    return response.data;
  } catch (error) {
    console.error('Error calling Azure Function:', error);
    throw error;
  }
};
