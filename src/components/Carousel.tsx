import React from "react";
import Carousel from "react-material-ui-carousel";
import Movie from "../interfaces/Movie";
//import { Paper,Button } from "@mui/material";


interface CarouselBuilderProps {
    movieData:Movie[];
}


const carouselBuilder = ({movieData}: CarouselBuilderProps) => {


    return (
        <Carousel>
            {
                movieData.map((item) => <p>{item.title}</p>)
            }
        </Carousel>
    )

}

export default carouselBuilder;