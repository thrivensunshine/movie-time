import React, {useState, useEffect } from 'react';
import {API_URL, API_KEY, API_BASE_URL, POSTER_SIZE, BACKDROP_SIZE} from '../config';
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

const Home = () => {
  const [state, setState] = useState({movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  //console.log(state + " COME ON MAN")

  //asynch
  const fetchMovies = async endpoint => {
    setError(false);
    setLoading(true);

    //run this code first
     try{
       const result = await (await fetch(endpoint)).json();
       console.log(result )
       setState(prev => ({
         ...prev,
         movies: [...result.results],
         heroImage: prev.heroImage || result.results[0],
         currentPage: result.page,
         totalPages: result.total_pages

       }));

     }
     //if try doesnt work run the catch
     catch(error){
       setError(true)
       console.log(error)
     }
     //not longer loading
     setLoading(false)
   }

     useEffect( () => {
       fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
     }, [fetchMovies])

     console.log(state + " state in home.js")

return (
  <>
    <HeroImage />
    <SearchBar />
    <Grid />
    <MovieThumb />
    <Spinner />
    <LoadMoreBtn />
  </>
)

}

export default Home;


///////////////////////////////////////////////////////

//*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
