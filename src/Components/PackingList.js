import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';
import Item from './Item';

export default function PackingList({ itemsList, onDeleteItem, onToggleItem, onClearList, onOpenModal, onCloseModal, showModalState }) {
  const [sortBy, setSortBy] = useState("input");
  // const [showModal, setShowModal] = useState(false);
  let sortedItemsArray;
  if (sortBy === "input") sortedItemsArray = itemsList;

  else if (sortBy === "description") {
    sortedItemsArray = itemsList.slice().sort((a, b) => a.description.localeCompare(b.description));
  }

  else {
    sortedItemsArray = itemsList.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className='list'>
      <ul>
        {/* {initialItems.map((item) => ( */}
        {sortedItemsArray.map((item) => (
          <Item itemObj={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
        ))}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value='input'>SORT BY INPUT ORDER</option>
          <option value='description'>SORT BY DESCRIPTION</option>
          <option value='packed'>SORT BY PACKED STATUS</option>
        </select>
        {/* <button onClick={onClearList}>Clear All</button>  */}
        {/* <button onClick={() => setShowModal(true)}>Clear All</button>  */}
        <button onClick={itemsList.length > 0 ? onOpenModal : null}>Clear All</button>
        {showModalState && createPortal(
          // <ModalContent clearAll={onClearList} onClose={() => setShowModal(false)} />,
          <ModalContent clearAll={onClearList} onClose={onCloseModal} />,
          // document.getElementById('modal-root')
          document.body,
          Date.now()
        )}
      </div>
    </div>
  );
}
