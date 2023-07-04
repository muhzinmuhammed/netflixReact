import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios' 
import {apikey,imageurl} from '../../constants/constants'
function Banner() {

  const [movie,setMovie]=useState()
  useEffect(()=>{
axios.get(`/trending/all/week?api_key=${apikey}&language=en-US`).then((response)=>{
  console.log(response.data.results[0]);
  setMovie(response.data.results[1])

})
  },[])
  return (
   
        <div className='banner' style={{backgroundImage:`url(${movie?imageurl+movie.backdrop_path:""})`}}>
        <div className='content'>
            <h1 className='title'>
               {movie ?movie.title :'l'}

            </h1>
            <div className='banner_button'>
                <button className='button'>Play</button>
                <button className='button'>Pause</button>


            </div>

            <h1 className='description'>
           {movie ? movie.overview :''}
            </h1>


        </div>
       <div className='fade_bottom'>

       </div>

      
    </div>
  )
}

export default Banner
