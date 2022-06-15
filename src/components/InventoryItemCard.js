import React from "react";

function InventoryItemCard({ item, onHandleClick, onHandleDelete}) {
  const { id, image, name, price } = item;
  return (
    <div className="card" onClick={() => onHandleClick(item)}>
      <img src={image}></img>
      <h3>{name}</h3>
      <h4>${price}</h4>
      <button onClick={(e) => onHandleDelete(e, id)}>
        Delete
      </button>
    </div>
  );
}

export default InventoryItemCard;
