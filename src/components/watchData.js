import React from 'react';

var WatchData = ({onClick, movie, checked}) => {
    



    return (
        <div>
            <span>Release date: {movie.release_date}</span>
            <span>Runtime: 107 min</span>
            <span>Popularity: {movie.popularity}</span>
            <div>Overview {movie.overview}</div>
            <div>
            </div>

        
            
        </div>
    );


};


export default WatchData;