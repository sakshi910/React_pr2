import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ()=>{
    const purple='#8e44ad'
    const [bg, setBg]= useState(purple);
    const [name, setName]= useState("click Me");
 
    const bgChange=()=>{
    let newBg='#34495e';
    setBg(newBg);
    setName('Ouchh ')
    };
    const bgBack =()=>{
       setBg(purple);
       setName('Ayyo!!')
    }
    return (
    <>
    <div style={{backgroundColor: bg}}>
        <button onClick ={bgChange} onDoubleClick={bgBack}><h1>{name}</h1></button>
    </div>
    </>);
}

export  default App; 