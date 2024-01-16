import {useModal} from '../../context/Modal'

function OpenModalButton({
    modalComponent,
    buttonText,
    onButtonClick,
    onModalClose
}) {
    const {setModalContent, setOnModalClose} = useModal()
//sets the modal to close or open
    const onClick = () => {
        if(onModalClose) setOnModalClose(onModalClose)
        setModalContent(modalComponent)
    if(typeof onButtonClick === 'function') onButtonClick()
    }
//returns the openmodalbutton and its components
    return <button onClick={onClick}>{buttonText}</button>
}

export default OpenModalButton
