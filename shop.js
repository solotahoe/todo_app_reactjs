import React, { useState, useEffect } from "react";

import "./App.css";

function Shop() {
  useEffect(() => {
    fectItems();
  }, []);

  const [items, setItems] = useState([]);
  const fectItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    const items = await data.json();
    console.log(items);
    console.log(items[1].title);
    setItems(items);
  };
  return (
    <div>
     
       
        <h1>shop page</h1>
     
    </div>
  );
}

export default Shop;
