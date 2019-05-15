import React, { useState, useEffect } from 'react';

const CounterWithHooks = () => {
	const delay = 1000;
	let timerID = null;
	const [count, setCount] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const toggleStatus = () => setIsActive(!isActive);
	const startCounter = () => {
		timerID = setInterval(() => {
			setCount(count => count + 1);
		}, delay);
	}
	const resetCounter = () => setCount(0);

	useEffect(() => {
		if(isActive) startCounter();
		else if(!isActive && count !== 0) {
			clearInterval(timerID);
		}
		// Specify how to clean up after this effect: 
		return () => clearInterval(timerID);
	}, [isActive]);

	return (
		<div className="counter__container">
			<h2>Counter with React Hooks</h2>
			<div>
				<button className="btn btn--orange" onClick={toggleStatus}>
					<span>{isActive ? 'Stop' : 'Start'}</span>
				</button>
				<button className="btn btn--blue" onClick={resetCounter}>
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
