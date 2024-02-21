import {useState,useEffect} from 'react';

const useLocalStorage = (key, defaultValue) => {
  // Add the state and effect here
  const [name,setName] = useState("");
  const [age,setAge] = useState(1);

  useEffect(() => {
    let getname = localStorage.getItem('NAME');
    let getage = localStorage.getItem("AGE");

    if(getname){
      setName(getname);
    }

    if(getage){
      setAge(getage);
    }
  },[])

    useEffect(() => {
      localStorage.setItem('NAME',name);
    },[name,age]);

    useEffect(() => {
      localStorage.setItem('AGE',age);
    },[age]);


  return {name,setName,age,setAge};

};

export default useLocalStorage;
