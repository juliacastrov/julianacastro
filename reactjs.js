import * as React from "react";
import ".styles.css";

const {useState} = React;

export default function App() {
	const [counter, setCounter] = useState (0)
return (
	<div className="App">
		<h1> Hello </h1>
		<p>
		{counter}
		</p>
		<button onClick="{() =>{
			setCounter(counter + 1);
		}}>>More</button>
	</div>


);
}
