import React, { useCallback } from "react";
import ComponentB from "./componentB";

class ComponentA extends React.Component{

    constructor(){
        super(); 
        this.state = {
            name : "ComponentA",
            list : []
        }
        console.log("Inside the constructor");
    }

    static getDerivedStateFromProps(){
        console.log("Inside getDerviedStateFromProps")
        return null;
    }
   
    componentDidMount(){
        console.log("Inside componentDidMount ")
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(data => this.setState({
                list : data
            }))

        
    }

    render(){
        console.log("Inside the Render");
        const {list} = this.state;
        
        return (
            <>
            <p>{this.state.name}</p>
            {list.map((list,index)=>(
                <ul key={index}>
                    <li>{list.username}</li>
                </ul>
            ))}
            <ComponentB />
            </>
        );
        }

}

export default ComponentA;
