import React from 'react';
import MovieListEntry from "./MovieListEntry";


var MovieList = ({ movies }) => (

  //getting in an array as props from the App mothership
  //div up the container
  <div id="MovieList">
    <div>
      {movies.map((movie, i) => (
        <MovieListEntry movie={movie} key={i} />
      ))}
    </div>
  </div>


);


export default MovieList;