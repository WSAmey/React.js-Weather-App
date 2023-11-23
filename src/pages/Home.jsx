import React, { useState } from 'react'
import Sunrise from '../assets/images/bg.jpg'
import Form from '../components/Form'
import Information from '../components/Information'

const Home = () => {

    const [result,setResult]=useState({});

  return (
   <>
    <div className='container' style={{display:"flex",width:"80%",marginLeft:"auto",marginRight:"auto",borderRadius:"5px",background:"white",boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
            <img src={`${Sunrise}`} alt='/' style={{width:"27%",height:"80%",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}/>

    <div style={{width:"73%",background:"whitesmoke"}}>
        <Form setResult={setResult}/>
        <Information result = {result}/>
    </div>
    </div>
   </>
  )
}

export default Home