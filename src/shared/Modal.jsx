

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Modal ({ setModalOpen, children}) {





    return(

        <>

            <div className="modal-overlay" onClick={() => setModalOpen(false)}>

                <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                    <button className="crudButton closeButton" onClick={() =>  setModalOpen(false) } >
                        <FontAwesomeIcon icon={faXmark} />

                        

                    </button>

                    {children}





                </div>
            </div>
        </>

    )
}


export default Modal