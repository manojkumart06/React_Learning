import React from "react";

class ComponentB extends React.Component{

    constructor(){
        super(); 
        this.state = {
            name : "ComponentB"
        }
        console.log("Inside ComponentB the constructor");
    }

    static getDerivedStateFromProps(){
        console.log("Inside ComponentB getDerviedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("Inside ComponentB componentDidMount ")
    }

    render(){
        console.log("Inside ComponentB the Render");
        return (
            <p>{this.state.name}</p>
        );
        }

}

export default ComponentB;
