import React from 'react';
import MovieList from './MovieList.js'
import Search from './Search';
import AddMovie from './AddMovie.js'
import ToWatch from './ToWatch.js'
import Watched from './Watched.js'




//an App needs state, this is the brain
class App extends React.Component {
  //inherit properties from anything withint the constructor
  constructor(props) {
    //inherit properties from React.Component
    super(props)

    this.state = {
      searchText: '',
      AddMovie: '',
      movieData: [],
      displayedMovies: [],
      watched: [],
      toWatch: [],
    };

    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onClick(event) {

    if (event.target.name === 'Search') {
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
      var matches = (results.length > 0) ? results : [{ title: 'Whoops! We cannot find that title :/  Try some of our other selections!' }];
      this.setState({ displayedMovies: matches });
    }

    if (event.target.name === 'AddMovie') {
      //get current user added movie, create object literal {title: 'movie'}, then push
      var movie = (this.state.movieData.length > 0) ? [...this.state.movieData, {title: this.state.AddMovie}] : [{title: this.state.AddMovie}];
      this.setState({movieData : movie,
                     displayedMovies: movie})
    }
    
    //set Button
    if (event.target.name === 'ToWatch') {
      //get current color state
      //set opposite color
      console.log('ToWatch clicked')
    }
    if (event.target.name === 'Watched') {
      console.log('watched clicked')
    }

  }

  //adds a persistent listener to the input tags.  When one changes their value, an event is triggered for that specific form.  
  //That event is then evaulated to the forms name for the key in setState
  handleChange(event) {
    //pass this event listener down
    // event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }


  render() {
    return (
      <div>
        <AddMovie onClick={this.onClick} onChange={this.handleChange} />
        <div>
        <Watched onClick={this.onClick}/>
        <ToWatch  onClick={this.onClick}/>
        <Search onClick={this.onClick} onChange={this.handleChange} />
          <div>
            <MovieList movies={this.state.displayedMovies} />
          </div>
          
        </div>
      </div>
    )
  }
}

export default App;
