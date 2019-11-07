import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
/* You can cache page when page cahnge by import CacheRoute & CacheSwitch */
// import CacheRoute, { CacheSwitch } from 'react-router-cache-route';

import services from './config/services';
import Header from './components/Header';

import AntFormSampleComponent from './containers/AntFormSample';

const App = () => {
	const pages = [
		{
			path: '/antFormSample',
			name: 'Ant Form Sample',
			component: AntFormSampleComponent,
		},
	];
	return (
		<Router basename={services.getContextRoot}>
			<div className="app">
				<Header pages={pages} />
				<Switch>
					{pages.map((page, index) => (
						<Route
							key={index.toString()}
							exact
							path={page.path}
							component={page.component}
						/>
					))}
					<Redirect to={pages[0].path} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
