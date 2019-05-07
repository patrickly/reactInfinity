import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const users = ['Patr', 'Joe', 'Parker', 'Cindy'];

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Patrick',
			age: 33
		};
	}

	printName = (name, age) => {
		console.log(`${name} is ${age} years old`);
	};
	render() {
		const printName = (name, age) => {
			console.log(`${name} is ${age} yearss old`);
		};
		return (
			<div className={'container'}>
				app
				<div className="button" onDoubleClick={printName.bind(null, 'Joe', 31)}>
					click me
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
