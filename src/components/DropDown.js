import React, { useState } from 'react';
import WatchData from './watchData.js'

var DropDown = ({onClick, movie, checked, getClick}) => {
    const [showWatchData, setWatchData] = useState(false);
  
  
  
    const whenClicked = () => {
      //toggle use state
      var currentState = showWatchData;
      currentState = !currentState;
      setWatchData(currentState);
    };



    return (
        <div>
            <span>Release date: {movie.release_date}</span>
            <span>Popularity: {movie.popularity}</span>
            <div>Overview {movie.overview}</div>
            <div>
            <input onClick={() => {onClick(movie)}} type="radio" defaultChecked={checked} id="radioButton" name="checked" value="newsletter"></input>
             <label>Watched</label>
             <button id="whereToWatch" type="button" value="Submit" name="whereRequest" onClick={() => {getClick('whereRequest', movie.id); whenClicked()}}>More info and where to watch</button>
            </div>
             
            {showWatchData ? <WatchData movie={movie} /> : null}
            
        </div>
    );


};


export default DropDown;

//response.data.results => [{movie}]
    // backdrop_path: "/k7h4RNAarfOrF2r2YMN0P2FQSr4.jpg"
    // genre_ids: (4) [80, 18, 53, 28]
    // id: 75780
    // original_language: "en"
    // original_title: "Jack Reacher"
    // overview: "When a gunman takes five lives with six shots, all evidence points to the suspect in custody. On interrogation, the suspect offers up a single note: "Get Jack Reacher!" So begins an extraordinary chase for the truth, pitting Jack Reacher against an unexpected enemy, with a skill for violence and a secret to keep."
    // popularity: 33.351
    // poster_path: "/zlyhKMi2aLk25nOHnNm43MpZMtQ.jpg"
    // release_date: "2012-12-20"
    // title: "Jack Reacher"
    // video: false
    // vote_average: 6.5
    // vote_count: 5071