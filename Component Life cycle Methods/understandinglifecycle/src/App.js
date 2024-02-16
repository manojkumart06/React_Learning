import React, { Component } from "react";
import ComponentA from './components/componentA'
import ComponentB from './components/componentB'
import ErrorBoundary from "./ErrorBoundary";

class App extends Component{
    constructor(){
        super();
    }





    render(){
        return(
            <>
            <ErrorBoundary>
            <ComponentA />
            </ErrorBoundary>
            <ErrorBoundary>
            <ComponentB />
            </ErrorBoundary>
            </>
        )
    }

}

export default App;