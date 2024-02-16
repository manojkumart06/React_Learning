import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false
    };
  }

  // Use the required lifecycle methods here
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(response => response.json())
      .then(data => this.setState({
        photos: data,
        loading: true //display the Loading on the screen 
      }))
      .catch(error => console.error('Error fetching photos:', error));
  }

  render() {
    const { loading, photos } = this.state;

    return (
      <div className="App">
        {loading ? ( // Display loading status here
           photos.map(photo => (
            <Image key={photo.id} photo={photo} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}
