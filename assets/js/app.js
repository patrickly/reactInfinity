import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Patrick'
		};
	}
	render() {
		return (
			<div className="container">
				<h1>{this.state.name}</h1>
			</div>
		);
	}
}

const App2 = () => {
	return (
		<div className="container">
			<h1>Justin</h1>
		</div>
	);
};

ReactDOM.render(<App2 />, document.getElementById('app'));