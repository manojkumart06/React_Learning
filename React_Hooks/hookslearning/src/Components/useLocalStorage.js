import { useState, useEffect } from "react";

export default function useLocalStorage(){

    const [email,setEmail] = useState("");

    useEffect(() =>{
        const emailgot = localStorage.getItem('EMAIL');
        if(emailgot){
          setEmail(emailgot);
        }
  
      },[]);

      useEffect(()=>{
        localStorage.setItem('EMAIL',email)
    },[email]);

    return {email,setEmail}
}