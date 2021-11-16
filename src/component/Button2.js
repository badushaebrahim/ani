import React,{ useState} from 'react'
//import Value from './Value'
function Button() {
	
	const [count,setCount] = useState(0);
	if(count<0){
	alert("Going negative")
	document.getElementById("p2").style.color = "blue";
}
	return (
		<div><p>
		Count: <br></br> {count} <br></br></p>
<button onClick={() => setCount(count + 1)} class="buts">Add</button>
<button onClick={() => setCount(count - 1)} class="buts">minus</button>
		</div>
	)
}

export default Button
