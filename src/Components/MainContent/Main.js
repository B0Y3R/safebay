import React, { Component } from 'react';
import { Center } from './Center';
import { Left } from './leftNav';
import { Aside } from './Aside';
import '../../Styles/Main.css';

export class Main extends Component {
	render() {
		return (
			  <div className="Main">
          <Left />
          <Center />
          <Aside />
        </div>
			)
	}
}

