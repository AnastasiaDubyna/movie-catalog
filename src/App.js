import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/constants.css';
import HomePage from './pages/homePage/HomePage';
import SearchResultsPage from './pages/searchResultsPage/SearchResultsPage';
import MediaPage from './containers/mediaPage/MediaPage';
import ErrorPage from './pages/errorPage/ErrorPage';
import FavouritesPage from './pages/favouritesPage/FavouritesPage';

// вынести роут в отдельный файл
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" exact element={<HomePage />} />
				<Route path="/search" element={<SearchResultsPage />} />
				<Route path="/media" element={<MediaPage />} />
				<Route path="/error" element={<ErrorPage />} />
				<Route path="/favourites" element={<FavouritesPage />} />
			</Routes>
		</Router>
	);
}

export default App;
