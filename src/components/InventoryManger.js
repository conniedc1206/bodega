import React, { useState } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList";

function InventoryManager() {
  const [inventory, setInventory] = useState([]);
  const [reorder, setReorder] = useState([]);

  const addItemToReorder = (itemToReorder) => {
    const isOnList = reorder.some((item) => item.id === itemToReorder.id);
    if (!isOnList) {
      setReorder((currentReorderItems) => [
        ...currentReorderItems,
        itemToReorder,
      ]);
    }
  };

  const removeItemFromReorder = (itemToRemove) => {
    setReorder((currentReorderItems) =>
      currentReorderItems.filter((item) => item.id !== itemToRemove.id)
    );
  };

  const removeForever = (e, itemId) => {
    e.stopPropagation();
    console.log(itemId);
    fetch(`http://localhost:8001/inventory/${itemId}`, {
      method: "DELETE",
    });
    setInventory((currentItems) =>
      currentItems.filter((item) => item.id !== itemId)
    );
    setReorder((currentReorderItems) =>
      currentReorderItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <div className="container">
      <CurrentInventoryList
        inventory={inventory}
        setInventory={setInventory}
        addItemToReorder={addItemToReorder}
        removeForever={removeForever}
      />
      <ReorderInventoryList
        reorder={reorder}
        removeItemFromReorder={removeItemFromReorder}
      />
    </div>
  );
}

export default InventoryManager;
