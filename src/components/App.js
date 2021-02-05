import React from 'react';
import MovieList from './MovieList.js'
import Search from './Search';
import AddMovie from './AddMovie.js'
import ToWatch from './ToWatch.js'
import Watched from './Watched.js'
import axios from "axios";
const green = '#3EFF00';
const grey = '#EFF0EF';
const TMDB_API_KEY = '2100d3780b0fdfc3b6e9130f98abd093';


//an App needs state, this is the brain
class App extends React.Component {
  //inherit properties from anything withint the constructor
  constructor(props) {
    //inherit properties from React.Component
    super(props)

    this.state = {
      searchText: '',
      color: [grey, green],
      AddMovie: '',
      movieData: [],
      displayedMovies: [],
      watched: [],
      toWatch: [],
      checked: '',
      whereWatch: []
    };
    //
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClickWatched = this.onClickWatched.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dataHandler = this.dataHandler.bind(this);
  }

  onClick(component, id) {

    if (component === 'Search') {
      //get the text and search for a movie item and setState the displayedMovies 
      var searchMovies = (text, movieList) => {
        var matches = [];
        for (var movie of movieList) {
          if (movie.title.toUpperCase().indexOf(text.toUpperCase()) !== -1) {
            matches.push(movie);
          }
        }
        return matches;
      }
      var results = searchMovies(this.state.searchText, this.state.movieData);
      var matches = (results.length > 0) ? results : [{ title: 'Whoops! I cannot find that title :/  Are you sure you added it?!' }];
      this.setState({ displayedMovies: matches, searchText: '' });
    }

    if (component === 'AddMovie') {
      this.makeItRain(this.state.AddMovie, 'search');
      // //get current user added movie, create object literal {title: 'movie'}, then push
      // var movie = (this.state.movieData.length > 0) ? [...this.state.movieData, {title: this.state.AddMovie}] : [{title: this.state.AddMovie}];
      // this.setState({movieData : movie,
      //                displayedMovies: movie,
      //                toWatch: movie,
      //               AddMovie: ''});
    }
    
    //tied to watched, toWatch button
    if (component === 'ToWatch') {
      //get current color state
      //set opposite color
      if (this.state.color[1] === grey) {
      var colorReversed = this.state.color.reverse();
      console.log('to watch clicked')
      //conditional about it being green
      this.setState({displayedMovies: this.state.toWatch,
                    color: colorReversed,
                    checked: ''})
      }              
    }
    if (component === 'Watched') {
      if (this.state.color[0] === grey) {
      var colorReversed = this.state.color.reverse();
      console.log('watched is clicked')
      this.setState({displayedMovies: this.state.watched,
                    color: colorReversed,
                     checked: 'checked'})
      // console.log('Watched: ', this.state.watched)
      }
    }

    if (component === 'whereRequest') {
      this.makeItRain(id, component)
    }

  }
  
  //tied to radial button
  //spefic purpose is to add this to the watched state
  onClickWatched(movieObject) {
    //this is a toggle button and currently only passes the movie title from the entry
    //when we get the title, check if it's in watched, if it isn't add to watched.  If it is remove at add to toWatch
    if (this.state.watched.includes(movieObject)) {
      //if its in the watched list, remove it and put it in the towatch list

      //remove it by saving a ref to the state
      var ref = this.state.watched;
      //removing it from the ref
      var i = ref.indexOf(movieObject);
      ref.splice(i, 1);
      //setting state of watched without object
      this.setState({watched: ref})

      //add it to the to watched state
      var newToWatch = (this.state.toWatch.length > 0) ? [...this.state.toWatch, movieObject] : [movieObject];
      this.setState({toWatch: newToWatch});
     
    //if its in the towatch list, remove it and put it in the watched list
  } else if (this.state.toWatch.includes(movieObject)) {
    //remove from toWatch
    var ref = this.state.toWatch;
      //removing it from the ref
      var i = ref.indexOf(movieObject);
      ref.splice(i, 1);
      //setting state of watched without object
      this.setState({toWatch: ref})
    
    //add it to watch
    var newWatched = (this.state.watched.length > 0) ? [...this.state.watched, movieObject] : [movieObject];
    this.setState({watched: newWatched});
  }
    
    //if it's in neither then add it to the watched this... this condition shouldn't exist because upon adding the movie it goes straight to the to watch list

  }



  //adds a persistent listener to the input tags.  When one changes their value, an event is triggered for that specific form.  
  //That event is then evaulated to the forms name for the key in setState

  //currently handling form inputs, used to automatically set state
  handleChange(event) {
    //pass this event listener dow
    // event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }
  
  //for handling forms only
  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target)
  }

  dataHandler(data, sort) {
    var results = data.data.results;
    if (sort === 'search') {
      //data coming in as array container with movie objects
      console.log('from data handler', results)
      var movieResults = (this.state.movieData.length > 0) ? [...this.state.movieData, ...results] : results;
      var toWatchResults = (this.state.toWatch.length > 0) ? [...this.state.toWatch, ...results] : results;
      var displayedResults = (this.state.displayedMovies.length > 0) ? [...this.state.displayedMovies, ...results] : results;
      this.setState({movieData: movieResults,
                     toWatch: toWatchResults,
                     displayedMovies: displayedResults})
    }
    
    if (sort === 'where') {
      console.log('where info', results)
    }
    
  }
  


  componentDidMount() {
  this.makeItRain('Jack Reacher', 'search');
  }
  makeItRain(rawData, callType) {
    if (callType === 'search') {
      //make a request
      var makeSpacesPluses = function (rawData) {
          return rawData.split(' ').join('+');
      }
      
      var query = makeSpacesPluses(rawData);
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}`)
           .then(response => {this.dataHandler(response, 'search')})
           .catch(err => console.log(err))

    }
    if (callType === 'whereRequest') {
    //take the response, request from the response id and then extend the new response with the old, and return to data handler
      
        axios.get(`https://api.themoviedb.org/3/movie/${rawData}/watch/providers?api_key=${TMDB_API_KEY}`)
           .then(response => {this.dataHandler(response, 'where')})
           .catch(err => console.log(err))
      

    }

  }
  

  render() {
    return (
      <div>
        <AddMovie value={this.state.AddMovie} onClick={this.onClick} onChange={this.handleChange} />
        <Search onSubmit={this.handleSubmit} value={this.state.searchText} onClick={this.onClick} onChange={this.handleChange} />
        <div>
        <Watched onClick={this.onClick} color={this.state.color}/>
        <ToWatch  onClick={this.onClick} color={this.state.color}/>
        
          <div>
            <MovieList getClick={this.onClick} checked={this.state.checked} movies={this.state.displayedMovies} onClick={this.onClickWatched} />
          </div>
          
        </div>
      </div>
    )
  }
}

export default App;

