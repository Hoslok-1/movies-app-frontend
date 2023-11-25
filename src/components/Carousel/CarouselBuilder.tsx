import React from 'react';
import './CarouselBuilder.css'
import Carousel from "react-material-ui-carousel";
import { Paper } from '@mui/material'
import Movie from '../../interfaces/Movie';

interface CarouselBuilderProps {
  movieData:Movie[];
}

const CarouselBuilder = ({movieData}:CarouselBuilderProps) => {
  return (
    <div className='movie-carousel-container'>
      <Carousel>
        {
          movieData.map((movie) => {
            return(
              <Paper>
                <div className='movie-card-container'>
                  <div className='movie-card' style={{"--img":`url(${movie.backdrops[0]})`} as React.CSSProperties}>
                    <div className="movie-detail">
                      <div className="movie-poster">
                        <img src={movie.poster} alt=''/>
                      </div>
                      <div className="movie-title">
                        <h4>{movie.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            )
          })
        }
      </Carousel>
    </div>
  )
}


export default CarouselBuilder