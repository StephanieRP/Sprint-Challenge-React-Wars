import React, { Component } from "react";
import DogList from "./components/doglist";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: []
    };
  }

  componentDidMount() {
    this.getDogs("https://dog.ceo/api/breed/beagle/images");
  }

  getDogs = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log("Data", data);
        this.setState({ dogs: data.message });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    // console.log("State", this.state);
    return (
      <div className="App">
        <h1 className="Header">Cute Dogs</h1>
        <div className="dog-container">
          {this.state.dogs.map((img, index) => (
            <DogList key={index} dog={img} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
