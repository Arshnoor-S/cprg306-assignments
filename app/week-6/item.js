import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-gray-800 p-4 mb-2 rounded">
      <h2 className="text-white text-lg font-bold">{name}</h2>
      <p className="text-gray-400">
        Buy {quantity} in {category}
      </p>
    </li>
  );
};

export default Item;
