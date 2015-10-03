import React, { Component } from 'react';

import Home from 'home';
import Utility from 'utility';

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
