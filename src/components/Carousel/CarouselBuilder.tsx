import React from 'react';
import './CarouselBuilder.css'
import Carousel from "react-material-ui-carousel";
import { Button,Paper } from '@mui/material'
import Movie from '../../interfaces/Movie';
import { useNavigate } from 'react-router-dom';

interface CarouselBuilderProps {
  movieData:Movie[];
}

const CarouselBuilder = ({movieData}:CarouselBuilderProps) => {
  const navigate = useNavigate();

  const navigatePurchase = (movie:Movie) => {
    const { imdbId,poster } = movie;
    navigate(`/movie/${imdbId}/${encodeURIComponent(poster)}`);
  };
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
                      <div className="buy-movie">
                        <Button variant='contained' onClick={() => {
                          navigatePurchase(movie)
                        }}>buy ticket</Button>
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