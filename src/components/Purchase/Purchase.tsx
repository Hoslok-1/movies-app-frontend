import React from 'react'
import './Purchase.css'
import { useParams } from 'react-router-dom'

const Purchase = () => {
    const {imdbId,poster} = useParams<{imdbId:string,poster:any}>();
  return (
    <div className="movie-purchase">
      <div className="movie-poster-purchase">
        <img src={decodeURIComponent(poster)} alt="movie poster"/>
      </div>
      <div className="form-details">
        <div>{imdbId}</div>
        <div>hello</div>
        <div>there</div>
      </div>
    </div>
  )
}

export default Purchase