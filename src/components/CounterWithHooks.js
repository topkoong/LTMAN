import React, { useState, useEffect } from 'react';

const CounterWithHooks = () => {
	const [count, setCount] = useState(0);
	const [isActive, setIsActive] = useState(false);

	function toggle() {
		setIsActive(!isActive);
	}

	function resetCount() {
		setCount(0);
	}

	useEffect(() => {
		let timerId = null;
		if (isActive) {
			timerId = setInterval(() => {
				setCount(count => count + 1);
			}, 1000);
		} else if (!isActive && count !== 0) {
			clearInterval(timerId);
		}
		return () => clearInterval(timerId);
	}, [isActive, count]);

	return (
		<div className="counter__container">
			<h2>Counter with React Hooks</h2>
			<div>
				<button className="btn btn--orange" onClick={toggle}>
					<span>{isActive ? 'Stop' : 'Start'}</span>
				</button>
				<button className="btn btn--blue" onClick={resetCount}>
					<span>Reset</span>
				</button>
			</div>
			<p>Result</p>
			<div className="result">
				<span className="result--text">{count}</span>
			</div>
		</div>
	);
};

export default CounterWithHooks;
