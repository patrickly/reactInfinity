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
	loopUsers = () => {
		return users.map((user, index) => {
			return <div key={index}>{user}</div>;
		});
	};
	showNotification = () => {
		if (this.state.age > 18) {
			return 'You can get in the club cuz ur legal';
		} else {
			return `You can't get in the club cuz ur not legal`;
		}
	};
	render() {
		return (
			<div className={`container ${this.state.age > 18 ? 'active' : ''}`}>
				<Header1>
					<b>{this.showNotification()}</b>
				</Header1>
				{this.loopUsers()}

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
