import axios from 'axios';

async function getStarships() {
    //create simple url
    const url = `${import.meta.env.VITE_API_URL}/starships/`;
    //get first 10 starships
    const response = await axios.get(url);
    //return response data
    return response.data
}

export { getStarships };