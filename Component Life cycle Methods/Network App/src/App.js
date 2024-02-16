import "./styles.css";
import { Component } from "react";
import Person from "./components/Person";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      network: [
        {
          id: 1,
          img:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071817/pexels-rodnae-productions-7348711_doe69b.jpg",
          email: "john@gmail.com",
          show: true
        },
        {
          id: 2,
          img:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071807/pexels-zaid-mohammed-15131063_bysy0s.jpg",
          email: "stephen@gmail.com",
          show: true
        },
        {
          id: 3,
          img:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071812/pexels-ali-kazal-14520051_qrdgym.jpg",
          email: "alex@gmail.com",
          show: true
        }
      ]
    };
  }

  // Create function to remove person from your network here
  removePerson = (index) => {
    this.setState(prevState => ({
       network: prevState.network.filter((_, i) => i !== index) //The provided function to filter takes two arguments: the current element (_) and its index (i). In this context, the underscore (_) is used as a placeholder because the current element itself is not used in the function; only the index of each element is needed.
    }));
  }
  
  

  render() {
    return (
      <div className="App">
        <h1>My Network</h1>
        <div className="list">
          {this.state.network.map((p, i) => (
            <Person key={i} person={p} index={i} removePerson = {this.removePerson}/>
          ))}
        </div>
      </div>
    );
  }
  
}


export default App;

