import { useState } from "react";

function FilterPosts(props) {
  const [string, setString] = useState("");

  return (
    <input
      type="text"
      name="filteredPosts"
      placeholder="Search..."
      value={string}
      onChange={(e) => {
        const newValue = e.target.value;
        setString(newValue);
        props.filterPosts(newValue);
      }}
    />
  );
}

export default FilterPosts;
