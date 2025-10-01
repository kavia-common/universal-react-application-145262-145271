import React, { useState } from "react";
import SearchBar from "../ui/SearchBar";

export default {
  title: "Inputs/SearchBar",
  component: SearchBar,
};

export const Default = {
  render: () => {
    const [query, setQuery] = useState("Delhi");
    const [loc, setLoc] = useState("Mumbai");
    return (
      <div style={{ width: 1136 }}>
        <SearchBar
          value={query}
          onChange={setQuery}
          onClear={() => setQuery("")}
          onSubmit={({ query, location }) => alert(`Search: ${query} @ ${location}`)}
          location={loc}
          onLocationChange={setLoc}
          locations={["Mumbai", "Delhi", "Bengaluru"]}
        />
      </div>
    );
  },
};
