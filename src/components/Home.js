import React, {useState, useEffect } from 'react';
import {API_URL, API_KEY, API_BASE_URL, POSTER_SIZE, BACKDROP_SIZE} from '../config';
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

const Home = () => {
  const [state, setState] = useState({movies: []});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

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
