import { useEffect } from 'react';
import './App.css';
import { getMovieById } from './repository/movieRepository';

function App() {
	useEffect(() => {
		getMovieById("343611")
	}, [])
	
	return (
		<div className="App">
			hello world
		</div>
	);
}

export default App;
