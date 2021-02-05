import React from 'react';
import MovieListEntry from "./MovieListEntry";


var MovieList = ({ checked, movies, onClick, getClick }) => (

  //getting in an array as props from the App mothership
  //div up the container
  <div id="MovieList">
    <div>
      {movies.map((movie, i) => (
        <MovieListEntry getClick={getClick} checked={checked} movie={movie} key={i} onClick={onClick}/>
      ))}
    </div>
  </div>


);


export default MovieList;