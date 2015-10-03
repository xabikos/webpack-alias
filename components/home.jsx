import React, { Component } from 'react';

import Utility from './common/utility.jsx';
import TextService from '../services/textService.js';

export default class Home extends Component {
	render() {
		return (
			<div>
        <p>This is the home page</p>
        <p>{TextService.text}</p>
        <Utility />
      </div>
		);
	}
}
