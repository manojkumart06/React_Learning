import { Component } from "react";

class Person extends Component {
  componentWillUnmount() {
    const { email } = this.props.person;
    alert(`A person with email ${email} was removed from your network!`);
    // console.log('---------componentWillUnmount')
  }
  

  render() {
    const { removePerson, index } = this.props;
    const { img, email } = this.props.person;
    return (
      <div className="person">
        <b onClick={() => removePerson(index)}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
