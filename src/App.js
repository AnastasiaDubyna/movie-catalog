import './App.css';
import { getMovieById } from './repository/movieRepository';

function App() {
	getMovieById("343611")
	.then(movieData => console.log(movieData));

	return (
		<div className="App">
			hello world
		</div>
	);
}

export default App;
