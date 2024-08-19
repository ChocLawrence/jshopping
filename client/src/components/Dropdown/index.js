import React from "react";
import { useState } from "react";

const Dropdown = ({ searchQuery, items, handleSelect }) => {
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (searchQuery) => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filteredItems);
  };

  return (
    <div>
      {filteredItems.map((item) => (
        <div key={1} onClick={() => handleSelect(item)}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
