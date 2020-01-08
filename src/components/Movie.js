import React from 'react';

import Navigation from './elements/Navigation';
import Actor from './elements/Actor'
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Grid from './elements/Grid'
import Spinner from './elements/Spinner'

import {useMovieFetch} from './hooks/useMovieFetch'

const Movie = ({movieId}) => {

  const [movie, loading, error] = useMovieFetch(movieId)
  console.log(movie)

  if (error) return <div>uh oh, that wasn't supposed to happen</div>
  if (loading) return <Spinner />
return(
  <>
    <Navigation movie={movie.original_title} />
    <MovieInfo movie={movie} />
    <MovieInfoBar/>
    <Grid>
      <Actor />
    </Grid>


  </>

)
}

export default Movie
