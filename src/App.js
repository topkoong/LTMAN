import React, { Component } from 'react';
import Counter from './components/Counter';
import CounterWithHooks from'./components/CounterWithHooks';
import './App.css';


class App extends Component {

	render() {
		return (
			<div className="app__container">
				<header className="header">
					<p>
						ITMan - Coding assesment
					</p>
				</header>
				<div>
					<Counter />
				</div>
				<div>
					<CounterWithHooks />
				</div>

			</div>
		);
	}
}

export default App;
