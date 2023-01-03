import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/constants.css';
import HomePage from './pages/homePage/HomePage';

// вынести роут в отдельный файл
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" exact element={<HomePage />} />
			</Routes>
		</Router>
	);
}

export default App;
