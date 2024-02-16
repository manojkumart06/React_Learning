import React, { Component } from "react";

class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state = {
            hasError : false
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError : true
        }

    }


    componentDidCatch(error,info){
        console.log('Error :',error);
        console.log('Error info :',info);
    }

    render(){
    
            if(this.state.hasError){
                return (<h1>Something Went wrong, contact owner!!</h1>)
            }
            return this.props.children
    }

}

export default ErrorBoundary;