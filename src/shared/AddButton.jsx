


import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types";
import { useState } from 'react';
import Modal from './Modal';



function AddButton({formComponent, loadProducts}) {

    const [isModalOpen, setModalOpen] = useState(false);
    return(

        <>
            <button className='crudButton addButton'  onClick={() => setModalOpen(true)}   >
                <FontAwesomeIcon icon={faPlus} />
            </button>

            {isModalOpen && (

                <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}  > 

                    {formComponent("add", {},loadProducts, setModalOpen)}
                
                
                </Modal>
            
            )}

        </>

    )
}

AddButton.propTypes ={
    formComponent: PropTypes.func.isRequired,
    loadProducts: PropTypes.func.isRequired
}


export default AddButton