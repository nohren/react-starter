import React from 'react';

var MovieListEntry = ({ movie }) => {

  return (
    <div className="boxed">
      {movie.title}
    </div>
  )
};

export default MovieListEntry;