import React from "react";
import "./charcters.css";

const Characters = props => {
  //   console.table(props);

  return (
    <div className="characters">
      <h3 className="character-name">{props.character.name}</h3>
      <p className="stats"> Stats: </p>
      <div className="character-info">
        <div className="character-info-text">
          <p>Height: {props.character.height}</p>
          <p>Eye Color: {props.character.eye_color}</p>
        </div>
        <div className="character-info-text">
          <p>Born in the year: {props.character.birth_year}</p>
          <p>Gender: {props.character.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default Characters;
