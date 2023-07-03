import './App.css';
// Object Destructuring
// import React from 'react';
useState = React.useState;
// {importValue} is an example of Object Destructuring
import { useState } from 'react';

import Clicker from '../Clicker/Clicker'

function App() {
    const[color, setColor] = useState('red');
    

    return(
    <>
    <Clicker color={color} setColor={setColor}/>
    </>
    )
}

export default App;
