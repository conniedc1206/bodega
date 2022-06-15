import React from "react";
import InventoryItemCard from "./InventoryItemCard";

function ReorderInventoryList({ reorder, removeItemFromReorder }) {
  //console.log(reorder);

  const renderReorder = reorder.map((item) => (
    <InventoryItemCard key={item.id} item={item} onHandleClick={removeItemFromReorder}/>
  ));

  return (
    <div id="reorder-container">
      <h2>Reorder</h2>
      <div>{renderReorder}</div>
    </div>
  );
}

export default ReorderInventoryList;
