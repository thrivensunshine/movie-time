import React, {useState, useEffect } from 'react';
import {API_URL, API_KEY, API_BASE_URL, POSTER_SIZE, BACKDROP_SIZE,IMAGE_BASE_URL} from '../config';
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

//no image import
import NoImage from './images/no_image.jpg'

//custom hook
import {useHomeFetch} from './hooks/useHomeFetch';

const Home = () => {
    const [{state, loading, error}, fetchMovies] = useHomeFetch();
    //search state to tell app if we are in a search or not- set as an empty string
    const [searchTerm, setSearchTerm] = useState('');


    if(error) return <div>Uh oh, looks like something went wrong </div>
    if(!state.movies[0]) return <Spinner />

    return (
      <>
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
          title = {state.heroImage.original_title}
          text = {state.heroImage.overview}
          />
        <SearchBar />
        <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
          {state.movies.map(movie => (
            <MovieThumb
              key={movie.id}
              clickable
              image={
                movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage
              }
              movieId= {movie.id}
              movieName = {movie.original_title} /> ))}



        </Grid>

        <MovieThumb />
        <Spinner />
        <LoadMoreBtn />
      </>
    )

}

export default Home;


///////////////////////////////////////////////////////

//*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
