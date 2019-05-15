import React, { Component } from 'react';

class Counter extends Component {
	state = {
		isActive: false,
		count: 0,
		delay: 1000,
	};

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	incrementCount = () => {
		this.timerID = setInterval(() => {
			this.setState({
				count: this.state.count + 1,
			});
		}, this.state.delay);
	}

	startCount = () => {
		this.setState(state => {
			if (state.isActive) {
				clearInterval(this.timerID);
			} else {
				this.incrementCount();
			}
			return { isActive: !state.isActive };
		});
	};

	resetCount = () => {
		if (this.state.isActive && this.timerID) {
			clearInterval(this.timerID);
			this.setState({
				count: 0
			});
			this.incrementCount();
		}
		else {
			this.setState({
				count: 0
			});
		}
	};



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
