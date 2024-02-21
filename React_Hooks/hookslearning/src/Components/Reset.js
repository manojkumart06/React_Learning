// import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function Reset(){

    // const [email,setEmail] = useState("");
    const {email,setEmail} = useLocalStorage();

    // useEffect(() =>{
    //   const emailgot = localStorage.getItem('EMAIL');
    //   if(emailgot){
    //     setEmail(emailgot);
    //   }

    // },[]);
    
    return(
        <>
        <h3>Reset Password for</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          // Logic to send a new password follows
        }}
      >
        Submit
      </button>      
      <br />
        </>
    )
}