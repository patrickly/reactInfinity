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
				<Header1>
					<b>Jodfe</b>
				</Header1>

				<Footer
					name="Bill "
					age={22}
					printName={() => console.log('hello my name is Bill')}
				/>
			</div>
		);
	}
}

const Header1 = props => {
	return <h1>{props.children}</h1>;
};

class Footer extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Patrick'
		};
	}
	render() {
		return (
			<footer onClick={this.props.printName}>
				Name: {this.props.name}
				age: {this.props.age}
			</footer>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
