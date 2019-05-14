import React, { Component } from 'react';

class Counter extends Component {
	state = {
		isActive: false,
		count: 0,
		timerId: null,
		delay: 1000,
		remaining: 0
	};

	startCount = () => {
		this.setState(state => {
			if (state.isActive) {
				clearInterval(this.timerId);
			} else {
				this.timerId = setInterval(() => {
					this.setState({
						count: this.state.count + 1,
					});
				}, this.state.delay);
			}
			return { isActive: !state.isActive };
		});
	};

	resetCount = () => {
		clearInterval(this.timerId);
		this.setState({
			count: 0,
		});
		this.timerId = setInterval(() => {
			this.setState({
				count: this.state.count + 1,
			});
		}, this.state.delay);
	};

	// Prevent Memory Leaks from happening

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	render() {
		const { isActive } = this.state;
		return (
			<div className="counter__container">
				<h2>Counter with Stateful Component</h2>
				<div>
					<button
						className="btn btn--orange"
						onClick={this.startCount}
					>
						<span>{isActive ? 'Stop' : 'Start'}</span>
					</button>
					<button className="btn btn--blue" onClick={this.resetCount}>
						<span>Reset</span>
					</button>
				</div>
				<p>Result</p>
				<div className="result">
					<span className="result--text">{this.state.count}</span>
				</div>
			</div>
		);
	}
}

export default Counter;
