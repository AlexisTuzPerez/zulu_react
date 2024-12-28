

import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import Modal from './Modal';

function EditButton({formComponent ,loadProducts, product}) {

    const [isModalOpen, setModalOpen] = useState(false);
    return (


        <>

            <button className='crudButton editButton'  onClick={() => setModalOpen(true)}>

            <FontAwesomeIcon icon={faPenToSquare} />
            </button>

            {isModalOpen && (

            <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}> 


                {formComponent("edit", product,loadProducts, setModalOpen)}



            </Modal>




            )}

        
        
        </>


       

      
    )
}


export default EditButton