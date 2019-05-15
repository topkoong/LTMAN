import React, { useState, useEffect, useRef } from 'react';

const CounterWithHooks = () => {
	const [count, setCount] = useState(0);
	const [isActive, setIsActive] = useState(false);
	let timerId = useRef(null);



	// When the toggle function is called it will change the value of isActive to be the opposite of what it currently is.

	function toggle() {
		setIsActive(!isActive);
	}

	function startCount() {
		timerId = setInterval(() => {
			setCount(count => count + 1);
		}, 1000);
	}

	function resetCount() {
		setCount(0);
	}

	// detect when isActive is true and start the timer inside of that function

	useEffect(() => {
		if(isActive) startCount();
		else {
			clearInterval(timerId);
		} 
		return () => clearInterval(timerId);
	}, [isActive, timerId]);

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
