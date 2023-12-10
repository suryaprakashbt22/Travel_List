import React from 'react';

export default function Stats({ itemsArray }) {
  if (!itemsArray.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀🚀</em>
      </p>
    );
  }
  const numItems = itemsArray.length;
  const numPacked = itemsArray.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numPacked * 100) / numItems);

  return (
    <footer className='stats'>
      <em>
        {percentagePacked === 100
          ? "You got everything! Ready to go 🚗"
          : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentagePacked}%)`}</em>
    </footer>
  );
}
