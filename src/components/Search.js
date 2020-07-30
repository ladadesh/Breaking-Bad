import React, { useState } from "react";

const Search = ({ setQuery }) => {
  const [text, setText] = useState("");

  const changeText = (q) => {
    setQuery(q);
    setText(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Character"
          autoFocus
          value={text}
          onChange={(e) => changeText(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
