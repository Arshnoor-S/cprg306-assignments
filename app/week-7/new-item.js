"use client";
import React, { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemCategory, setItemCategory] = useState("Produce");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const itemDetails = {
      name: itemName,
      quantity: itemQuantity,
      category: itemCategory,
    };

    console.log(itemDetails);

    const newItem = {
      id: Math.random().toString(20).slice(2),
      name: itemName,
      quantity: itemQuantity,
      category: itemCategory,
    };
    onAddItem(newItem);

    setItemName("");
    setItemQuantity(1);
    setItemCategory("Produce");
  };

  return (
    <form
      className="max-w-sm w-full mt-2 mb-8 bg-slate-900 text-black"
      onSubmit={handleFormSubmit}
    >
      <div className="mb-1">
        <input
          className="w-full mb-1.5 p-2 border-gray-700 rounded-lg"
          placeholder="Item Name"
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
      </div>
      <div className="mb-2 flex justify-between">
        <input
          className="mr-14 p-2 border-gray-700 rounded-lg"
          type="number"
          value={itemQuantity}
          min="1"
          max="99"
          onChange={(e) => setItemQuantity(Number(e.target.value))}
          required
        />
        <select
          className="ml-14 p-2 border-gray-700 rounded-lg"
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
        >
          <option value="Produce" defaultChecked>
            Produce
          </option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button
        className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        type="submit"
      >
        +
      </button>
    </form>
  );
}
