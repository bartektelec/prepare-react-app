import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MainRouter from './routers/MainRouter';
import logo from './logo.svg';
import './style.css';

const App: React.FC = () => {
	const counter = useSelector(state => state);
	const dispatch = useDispatch();
	return (
		<Router>
			<div className='App'>
				<button type='button' onClick={() => dispatch({ type: 'INCREMENT' })}>
					{counter}
				</button>
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
