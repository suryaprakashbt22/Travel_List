import React from 'react';
import {useState,useEffect} from 'react';
import Logo from './Logo';
import Form  from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

export default function App(){
  const [itemsArray, setItemsArray] = useState([]);
  // const [openMod, setOpenMod] = useState(false);
  
  const [showModal, setShowModal] = useState(false);


  function AddItemToItemsArray(itemName){
    setItemsArray((itemsArray)=>([...itemsArray,itemName]));
  }

  function handleDeleteItem(id){
    setItemsArray((items)=>items.filter((item)=>item.id !==id));
  }

  function handleToggleItem(id){
    setItemsArray((itemsArray)=>itemsArray.map((item)=>
      item.id===id ? {...item, packed:!item.packed}
       : item
      )
    );
  }

  function onClearList(){
    setItemsArray([]);
    setShowModal(false);
  }

  function handleOpenModal(){
    setShowModal(true);
  }
  function handleCloseModal(){
    setShowModal(false);
  }

  return (
    <div className='finaldv'>
        {showModal && 
          <div className='overlay'></div>
        }
        <div className= {!showModal?"app":"popups"}>
        <Logo/>
        <Form onChangeItemsArray={AddItemToItemsArray}/>
        <PackingList 
          itemsList={itemsArray}
          onDeleteItem={handleDeleteItem} 
          onToggleItem={handleToggleItem} 
          onClearList={onClearList}
          onOpenModal={handleOpenModal}
          onCloseModal={handleCloseModal}
          showModalState={showModal}
          />
        <Stats itemsArray={itemsArray}/>
      </div>
    </div>
  );
}


