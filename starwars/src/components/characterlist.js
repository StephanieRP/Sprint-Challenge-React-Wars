import React from "react";
import Characters from "./characters";

const CharactersList = props => {
  //   return <p />;
  return props.characters.starwarsChars.map(character => (
    <Characters key={character.height} character={character} />
  ));
};

export default CharactersList;
