import React from "react";
import CharacterItems from "./CharacterItems";
import Spinner from "./Spinner";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <div className="center">
      <Spinner />
    </div>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItems key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
