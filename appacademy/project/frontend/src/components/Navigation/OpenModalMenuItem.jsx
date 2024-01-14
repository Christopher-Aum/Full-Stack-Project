import { useModal } from '../../context/Modal';
//handles the pieces of the menu item
function OpenModalMenuItem({
  modalComponent, // component to render inside the modal
  itemText, // text of the menu item that opens the modal
  onItemClick, // optional: callback function that will be called once the menu item that opens the modal is clicked
  onModalClose // optional: callback function that will be called once the modal is closed
}) {
  const { setModalContent, setOnModalClose } = useModal();
//handles the clicking function
  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (typeof onItemClick === "function") onItemClick();
  };
//returns the openmodalmenuitem component and its components
  return (
    <li onClick={onClick}>{itemText}</li>
  );
}

export default OpenModalMenuItem;

// import React from 'react'
// import {useModal} from '../../context/Modal'

// function OpenModalMenuItem({
//     modalComponent, //component to render inside the modal
//     itemText, //text of the menu item that opens the modal
//     onItemClick, //optional: callback function that will be called once the menu item that opens the modal is clicked
//     onModalClose //optional: callback function that will be called once the modal is closed
// }) {
//     const {setModalContent, setOnModalClose} = useModal()
//     const onClick = () => {
//         if(onModalClose) setOnModalClose(onModalClose)
//         setModalContent(modalComponent)
//         if(typeof onItemClick === "function") onItemClick()
//     }
//     return (
//         <li onClick={onclick}>{itemText}</li>
//     )
// }
