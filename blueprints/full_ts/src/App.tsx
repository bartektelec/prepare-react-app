import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import MainRouter from './routers/MainRouter';
import logo from './logo.svg';
import './style.css';

const App: React.FC = () => {
	// Create the count state.
	const [count, setCount] = useState(0);
	// Create the counter (+1 every second).
	useEffect(() => {
		const timer = setTimeout(() => setCount(count + 1), 1000);
		return () => clearTimeout(timer);
	}, [count, setCount]);
	// Return the App component.
	return (
		<Router>
			<div className='App'>
				<nav>
					<NavLink exact to='/'>
						Home
					</NavLink>
					<NavLink to='/about'>About</NavLink>
				</nav>
				<header>
					<img src={logo} className='App-logo' alt='logo' />
					<p>
						<MainRouter />
					</p>
					<p>
						Page has been open for <code>{count}</code> seconds.
					</p>
					<p>
						<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
							Learn React
						</a>
					</p>
				</header>
			</div>
		</Router>
	);
};

export default App;
