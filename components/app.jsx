import React, { Component } from 'react';

import Home from './home.jsx';
import Utility from './common/utility.jsx';

export default class App extends Component {
	render() {
		return (
			<div>
        This is the application main conent
        <Utility />
        <Home />
      </div>
		);
	}
}
