import { useState } from 'react';

function Clicker() {

    // useState is a function, and will pass in whatever you want
    // the initial value to be
    // returns an array with [currentStateValue, functionToUpdateStateValue]
    const[name, setName] = useState('butts')
    const[count, setCount] = useState(0);

    return (
        <div className="App">
            <p>Hello! My name is {name}.</p>
            <p>My favorite color is {props.color}</p>
            <button onClick={()=> setCount(count+1)}>Click me!</button>
            <p>I've clicked the button {count} times.</p>
        </div>
    );
}

export default Clicker;