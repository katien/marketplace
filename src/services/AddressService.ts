import axios from 'axios';

// todo: build proxy server
const baseUrl = 'https://www.zolo.ca/typeahead.php';

export async function getAddress(mlsNumber: string) {
  return await axios.request({
    method: 'GET',
    url: `${baseUrl}`,
    params: {
      query: mlsNumber,
    },
  });
}
