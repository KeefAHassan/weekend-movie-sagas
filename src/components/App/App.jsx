import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import './App.css';
import MovieDetails from '../movieDetails/movieDetails';

function App() {
  return (
    <div className="App">
      <Router>        
        <Route path="/" exact>
        <h1>The Movies Saga!</h1>

          <MovieList />
        </Route>

        <Route path="/details/:id" exact>
          <MovieDetails />
        </Route>
        {/* Details page */}

        {/* Add Movie page */}
        
      </Router>
    </div>
  );
}

export default App;
