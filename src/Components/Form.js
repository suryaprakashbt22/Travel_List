import React from 'react';
import { useState } from 'react';

export default function Form({ onChangeItemsArray }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);


  function handleAddItemToList(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onChangeItemsArray(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className='add-form' onSubmit={handleAddItemToList}>
      <h3> What do you need for your trip ? 😉</h3>
      <select
        value={quantity}
        onChange={(e) => {
          // console.log(e.target.value);
          setQuantity(Number(e.target.value)); // we need to convert the 'e.target.value' to number explicitly because on selecting a different option from form, it converts it into string which we don't want. 
        }}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={(e) => {
          // console.log(e.target.value);
          setDescription(e.target.value);
        }} />
      <button>Add</button>
    </form>
  );
}
