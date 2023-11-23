import React from 'react'
import sunrise from '../assets/images/sunrise.png'
import sunset from '../assets/images/sunset.png'
import cloud from '../assets/images/cloud.png'
import atmospheric from '../assets/images/atmospheric.png'
import windspeed from '../assets/images/windspeed.png'





const Information = ({result}) => {
  return (
    <>
    {Object.keys(result).length>0 &&  
    <>
    <div style={{marginTop:"7vh"}}>
      <h3>   <i class="fa-solid fa-location-dot"></i> {result.name} {result.sys.country}    
</h3>
      <h1>{result.main.temp}&deg;</h1>
    </div>
    <div style={{marginTop:"7vh",display:"grid",gridTemplateColumns:"auto auto auto auto",padding:"20px",background:"whitesmoke",gap:"1vw",borderBottomRightRadius:"5px"}}>
      
    <div style={{padding:"10px",width:"12vw",borderRadius:"5px",fontSize:"large",fontWeight:"bold",background:"white",boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
      <p>Max Temp</p>
      <i class="fa-solid fa-temperature-arrow-up"></i>
      <p>{result.main.temp_max}&deg;</p>
    </div>
    <div style={{padding:"10px",width:"12vw",borderRadius:"5px",fontSize:"large",fontWeight:"bold",background:"white",boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
      <p>Min Temp</p>
      <i class="fa-solid fa-temperature-arrow-down"></i>
      <p>{result.main.temp_min}&deg;</p>
    </div>
    <div style={{padding:"10px",width:"12vw",borderRadius:"5px",fontSize:"large",fontWeight:"bold",background:"white",boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
      <p>Humidity</p>
      <i class="fa-solid fa-bars"></i>
      <p>{result.main.humidity}%</p>
    </div>
    <div style={{padding:"10px",width:"12vw",borderRadius:"5px",fontSize:"large",fontWeight:"bold",background:"white",boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
      <p>Sun Rise</p>
      <img src={sunrise} style={{width:"2vw"}}/>
      <p>{new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</p>
    </div>
    <div style={{padding:"10px",width:"12vw",borderRadius:"5px",fontSize:"large",fontWeight:"bold",background:"white",boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
      <p>Sun Set</p>
      <img src={sunset} style={{width:"2vw"}}/>
      <p>{new Date(result.sys.sunset * 1000).toLocaleTimeString()}</p>
    </div>
    <div style={{padding:"10px",width:"12vw",borderRadius:"5px",fontSize:"large",fontWeight:"bold",background:"white",boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
      <p>Clouds</p>
      <img src={cloud} style={{width:"2vw"}}/>
      <p>{result.clouds.all}%</p>
    </div>
    <div style={{padding:"10px",width:"12vw",borderRadius:"5px",fontSize:"large",fontWeight:"bold",background:"white",boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
      <p>Pressure</p>
      <img src={atmospheric} style={{width:"2vw"}}/>
      <p>{result.main.pressure} hPa</p>
    </div> 
    <div style={{padding:"10px",width:"12vw",borderRadius:"5px",fontSize:"large",fontWeight:"bold",background:"white",boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
      <p>Wind Speed</p>
      <img src={windspeed} style={{width:"2vw"}}/>
      <p>{(result.wind.speed * 3.6).toFixed(2)} km/h</p>
    </div> 
        
    </div>
    </>
    }
    {Object.keys(result).length===0 && <h4 style={{color:"red"}}>Please Enter The Values</h4>}
    {/* Object.keys() returns the array of keys */}
    </>
  )
}

export default Information