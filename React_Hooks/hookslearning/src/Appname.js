import './style.css';
import { useState, useEffect } from 'react';

function App() {
  const [name,setName] = useState("");
  const [lname,setLName] = useState("");

  //acts like both componentMount and componentUpdate
  useEffect(() => {
    document.title = name+" "+lname
  });

  //multiple side effects
  useEffect(() => {
    let timer = setInterval(() => {
      console.log("Window_width : ",window.innerWidth);
    }, 2000);

    //like componentWillUnMount
    return(clearInterval(timer));
  });

  return (
    <>
    <div className="App">
      <div className="inputfname">
        <label className='Label'>NAME</label>
        <br />
        <input placeholder="fname" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <hr />
      <div className="inputlname">
      <label className='Label'>LAST NAME</label>
        <br />
        <input placeholder="lname" value={lname} onChange={(e) => setLName(e.target.value)}/>
      </div>
      <hr />  
    </div>
    <h1>Hello, {name + " " + lname}</h1>
    </>
  );
}

export default App;
