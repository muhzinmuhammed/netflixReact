import React,{useEffect, useState} from 'react'
import './RowPost.css'

import axios  from 'axios'
function RowPost(props) {
  const [movie,setMovie]=useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovie(response.data.results);
    }).catch(err=>{
      

    })

  },)
  return (
    <div className='row'>
        <h2>
            {props.title}
        </h2>
      <div className='posters'>
      {movie.map((obj) => 
          <img
           
            className={props.isSmall ? 'poster' :'small-poster'}
            src={`https://image.tmdb.org/t/p/w500/${obj.backdrop_path}`}
            alt='poster'
          />
        )}

       
       
      </div>
      
    </div>
  )
}

export default RowPost
