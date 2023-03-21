import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

  export const fetchApi = async(url)=> {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'b7742f0b19msh885b864753dc243p18f82cjsnd27916b82549',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });
    return data;
  }