import React from "react";
import ItemList from "./item-list";

const Page = () => {
  return (
    <main className="p-8 bg-gray-900 min-h-screen">
      <h1 className="text-white text-4xl font-bold mb-8">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
