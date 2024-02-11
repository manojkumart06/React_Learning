// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon
import { Component } from "react";
import './styles.css'

export default class Hero extends Component{
    render(){
        return (
            <div className="mydetails">
                <h3>Name: Pranav Shared yeole</h3>
                <p>Email: pranav@google.com</p>
                <p>Phone: 8546465544</p>
                <p>Address: ABC, xyz street.</p>
            </div>
    )}
} 