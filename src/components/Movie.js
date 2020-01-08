import React from 'react';

import Navigation from './elements/Navigation';
import Actor from './elements/Actor'
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Grid from './elements/Grid'
import Spinner from './elements/Spinner'

const Movie = ({movieId}) => (
  <>
    <Navigation />
    <MovieInfo />
    <MovieInfoBar/>
    <Grid>
      <Actor />
    </Grid>

  </>

)


export default Movie
