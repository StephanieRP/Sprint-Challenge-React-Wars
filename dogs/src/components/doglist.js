import React from "react";
import "../style.css";

const DogList = props => {
  console.log("Doglist:", props);
  return <img className="cute-dogs" src={props.dog} alt="cute dogs" />;
};

export default DogList;
