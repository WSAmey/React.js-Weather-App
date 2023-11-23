import axios from 'axios';
const API_KEY=''; //pass your API KEY(get the API key by generating by sigin to opeanweatherapi website and there you can generate the API key)
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
