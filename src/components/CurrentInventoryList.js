import React, { useEffect } from "react";
import InventoryItemCard from "./InventoryItemCard";

function CurrentInventoryList({ inventory, setInventory, addItemToReorder, removeForever }) {
  useEffect(() => {
    fetch("http://localhost:8001/inventory")
      .then((resp) => resp.json())
      .then((data) => setInventory(data));
  }, []);
  //console.log(inventory);

  const renderInventory = inventory.map((item) => (
    <InventoryItemCard
      key={item.id}
      item={item}
      onHandleClick={addItemToReorder}
      onHandleDelete={removeForever}
    />
  ));

  return (
    <div id="current-inventory">
      <h2>Current Inventory</h2>
      <div>{renderInventory}</div>
    </div>
  );
}

export default CurrentInventoryList;
