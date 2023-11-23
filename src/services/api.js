import axios from 'axios';
const API_KEY='12ebae60a6dcc224f2fbca3c75704c24';
const API_URL='https://api.openweathermap.org/data/2.5/weather';

export const getWeather=async(city, country)=>{
    try {
        let response=await axios.get(`${API_URL}?q=${city}, ${country}&appid=${API_KEY}&units=metric`);
        return response.data;

    } catch (error) {
        console.log("Error while calling the api ",error);
        return error.response;
    }   
}