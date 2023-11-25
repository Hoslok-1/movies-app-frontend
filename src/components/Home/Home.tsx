import React from 'react'
import axios,{ AxiosResponse } from 'axios'
import CarouselBuilder from '../Carousel/CarouselBuilder'
const Home = () => {

  const [movieData,setMovieData] = React.useState([])

  const getAPIData = async () =>{

    try {
      const response:AxiosResponse = await axios.get('http://localhost:8080/api/v1/movies');
      setMovieData(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }

  }

  React.useEffect(() => {
    getAPIData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  return (
    <CarouselBuilder movieData = {movieData} />
  )
}

export default Home