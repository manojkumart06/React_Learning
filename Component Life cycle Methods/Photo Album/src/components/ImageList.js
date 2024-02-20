import React from "react";
import Image from "./Image";

export default class ImageList extends React.Component {
  // Create Lifecycle method to prevent re render of the list if some spaces are present. 
  // Use the shouldComponentUpdate lifecycle method here
  shouldComponentUpdate(nextProps) {
    //console.log("Current Props:", this.props.images);
    //console.log("Next Props:", nextProps.images);
    
    if (this.props.images.length !== nextProps.images.length) {
      console.log("Length of images array changed. Allowing re-render.");
      return true;
    } else {
      for (let i = 0; i < this.props.images.length; i++) {
        if (this.props.images[i] !== nextProps.images[i]) {
          console.log("Images have changed. Allowing re-render.");
          return true;
        }
      }
      //console.log("No changes in images array. Preventing re-render.");
      // If all images are the same, prevent re-rendering
      return false;
    }
  }

  render() {
    return (
      <div className="image-list">
        {this.props.images.map((image, index) => {
          return <Image key={index} image={image} />;
        })}
      </div>
    );
  }
}


