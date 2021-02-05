import React, { useState } from 'react';
import DropDown from './DropDown.js'

//color refs 
const green = '#3EFF00';
const grey = '#EFF0EF';
const baseURL = 'http://image.tmdb.org/t/p/w185/'

var MovieListEntry = ({ movie, onClick, checked, getClick }) => {
  const [color, setColor] = useState(grey);
  const [showDropDown, setDropDown] = useState(false);
  // const [dropDown, setDropDown] = useState(DropDown);
  
  
  const whenClicked = () => {
    //toggle use state
    var currentState = showDropDown;
    currentState = !currentState;
    setDropDown(currentState);
  };

  // setDropDown(null);
  const changeColor = () => {
    console.log('triggered changeColor')
    var newColor = color === grey ? green : grey;
    setColor(newColor);
  }

  var url = baseURL+movie.poster_path;

  return (
    <div>
      
      <div className="boxed" onClick={() => { changeColor(); whenClicked(); }} style={{ background: color }}>
        <span>{movie.original_title}</span>
         <img id="movieImg" src={url}></img>
         
      </div >
      {showDropDown ? <DropDown checked={checked} getClick={getClick} movie={movie} onClick={onClick} /> : null}
    </div>
  )
};

export default MovieListEntry;

// onClick(movie); moving the movie choosing to the watched or to the ToWatched

//base url to add to poster path
//http://image.tmdb.org/t/p/w185/

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