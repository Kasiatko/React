import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';


function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleOnClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I accept</Button>
        </div>
    )

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>

        </Modal>

  return (
    <div className='relative'>
        
        
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        
        <Button primary onClick={handleOnClick}>Open Modal</Button>
        {showModal && modal }
    </div>
  )
}

export default ModalPage