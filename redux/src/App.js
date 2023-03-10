import logo from './logo.svg';
import './App.css';
import { configureStore } from "@reduxjs/toolkit";

const initialMovies = {
  movies:[
    'Rambo III', 'Hakerzy', 'Matrix'
  ]
}

function movies(state = initialMovies , action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state, movies: [...state.movies, action.movie]
      }
    case 'DELETE':
      return{
        ...state, movies: state.movies.filter(item => item !== action.movie)
      }
    case 'RESET':
      return {
        movies: []
      }
    default:
      return state
  }
}

const store = configureStore({reducer: movies})
window.store = store

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
