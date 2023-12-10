import React from 'react';


export default function Item(props) {
  return (
    <li>
      <input type='checkbox' value={props.itemObj.packed}
        onChange={() => { props.onToggleItem(props.itemObj.id); }} />
      <span className={props.itemObj.packed ? 'packedItem' : ''}>
        {props.itemObj.quantity} {props.itemObj.description}
      </span>
      <button onClick={() => props.onDeleteItem(props.itemObj.id)}>❌</button>
    </li>
  );
}
