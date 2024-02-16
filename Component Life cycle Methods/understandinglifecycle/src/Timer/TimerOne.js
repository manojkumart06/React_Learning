import React from "react";

export default class Timer extends React.Component{
    //Mounting phase
    constructor(){
        super();
        this.state = {
            time : 0
        }

        this.timer = null;
        console.log("TimerOne constructor")
    }

    static getDerivedStateFromProps(){
        console.log("TimerOne getDerivedStateFromProps")
        return null;
    }

    //Updating phase
    shouldComponentUpdate(nextProps,nextState){
        console.log(this.state.time);
        return nextProps.timerOn !== this.props.timerOn || nextState.time % 5 === 0
    }

    //For increasing counter
    // handleInc = () => (
    //     this.setState((prevState)=> {
    //         return { count : prevState.count + 1}
    //     })
    // )

    //Mounting and Updating phase
    render(){
        console.log("TimerOne render")
        return (
            <>
            <h1>Time Spent : {new Date(this.state.time * 1000).toISOString().slice(11,19)}</h1>
            
            {/* <h2>{this.state.count}</h2>
            <button onClick={this.handleInc}>Increase</button> */}
            </>
        )
    }

    //Mounting phase
    componentDidMount(){
        console.log("TimerOne componentDidMount")
        console.log("_______________________________________")

    }

    //Updating phase
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("TimerOne getSnapshotBeforeUpdate")
        return null;
    }

    //Updating phase
    componentDidUpdate(prevProps,prevState,snapShot){
        console.log("TimerOne componentDidUpdate")
        console.log("_______________________________________")
        // if(this.state.time === 30){
        //     clearInterval(this.Timer);
        // }
        // console.log("prevProps = ",prevProps)
        // console.log("prevState = ",prevState)
        // console.log("snapShot getting from getSnapshotBeforeUpdate = ",snapShot)

        if (prevProps.timerOn !== this.props.timerOn) {
                if (this.props.timerOn) {
                this.timer = setInterval(() =>{
                    this.setState((prevState) => ({ time : prevState.time + 1 }))
                }, 1000);
                } else {
                clearInterval(this.timer);
                }   
            }
        }


        componentWillUnmount(){
            console.log('TimerOne componentWillUnmount');
            clearInterval(this.timer);
        }



}