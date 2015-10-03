import React, { Component } from 'react';

import Utility from 'utility';
import TextService from 'textService';

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
