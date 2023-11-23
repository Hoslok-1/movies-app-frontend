import React from 'react';
import axios, {AxiosResponse} from 'axios';
import CarouselBuilder from './components/Carousel';
import './App.css';

function App() {

  const [movieData,setMovieData] = React.useState([]);

  const getMovieData = async() => {
    try {
      const response: AxiosResponse = await axios.get('http://localhost:8080/api/v1/movies');
      setMovieData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error)
    }
  };

  React.useEffect(() => {
    getMovieData();
  },[]);

  return (
    <div className="App">
      <p>Hello,World!</p>
      <CarouselBuilder movieData ={movieData}/>
    </div>
  );
}

export default App;
