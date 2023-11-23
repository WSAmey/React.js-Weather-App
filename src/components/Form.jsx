import React, { useState } from 'react'
import '../components/Form.css'
import { getWeather } from '../services/api';


const Form = ({setResult}) => {

    const [data,setData]=useState({city:"",country:""});

    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const getWeatherInfo=async()=>{
       const response = await getWeather(data.city,data.country);
       setResult(response);
    }

  return (
    <form style={{display:"grid",gridTemplateColumns:"auto auto auto",padding:"10px",background:"#445A6F",justifyContent:"space-around",borderTopRightRadius:"5px"}}>
        <input type='text' placeholder='City' name='city' onChange={(e)=>handleChange(e)}  style={{width:"10vw",padding:"10px",background:"#445A6F",border:"1px solid white",borderRadius:"5px",color:"white",outline:"none",fontSize:"medium"}} autoComplete='off'/>
        <input type='text' placeholder='Country' name='country' onChange={(e)=>handleChange(e)} style={{width:"10vw",padding:"10px",background:"#445A6F",border:"1px solid white",borderRadius:"5px",color:"white",fontSize:"medium",outline:"none"}} autoComplete='off'/>
        <button style={{width:"10vw",padding:"10px",background:"orange",border:"none",borderRadius:"4px",fontSize:"medium",color:"white",cursor:"pointer"}} onClick={(e)=>{
            e.preventDefault();
            getWeatherInfo()}}>GET WEATHER</button>
    </form>
  )
}

export default Form;