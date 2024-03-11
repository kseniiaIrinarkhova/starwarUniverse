import axios from 'axios';

const API_URL = 'https://www.swapi.tech/api/'

async function getStarships() {
    //create simple url
    const url = `${API_URL}/starships/`;
    //get first 10 starships
    const response = await axios.get(url);
    //return response data
    return response.data
}

async function getShip( shipId){
    //create simple url
    const url = `${API_URL}/starships/${shipId}`;
    //get star ship data
    const response = await axios.get(url);
    console.log(response)
    //return response data
    return response.data
}

export { getStarships, getShip };