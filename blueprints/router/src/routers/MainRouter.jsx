import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';

const MainRouter = () => {
	return (
		<Switch>
			<Route path='/' exact component={HomePage} />
			<Route path='/about' component={AboutPage} />
		</Switch>
	);
};

export default MainRouter;
