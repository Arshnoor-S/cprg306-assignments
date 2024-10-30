"use client";

import React, { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

const ItemList = () => {
  const [sortingCriteria, setSortingCriteria] = useState("name");

  const getSortedItems = () => {
    return [...itemsData].sort((a, b) => {
      switch (sortingCriteria) {
        case "name":
          return a.name.localeCompare(b.name);
        case "category":
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });
  };

  const sortedItems = getSortedItems();

  return (
    <div className="item-list-container">
      <div className="flex mb-4">
        <button
          className={`px-4 py-2 mr-2 ${
            sortingCriteria === "name" ? "bg-orange-400" : "bg-orange-600"
          } text-white rounded`}
          onClick={() => setSortingCriteria("name")}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 ${
            sortingCriteria === "category" ? "bg-orange-400" : "bg-orange-600"
          } text-white rounded`}
          onClick={() => setSortingCriteria("category")}
        >
          Sort by Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
