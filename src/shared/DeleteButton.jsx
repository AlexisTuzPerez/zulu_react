

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function DeleteButton({fetchDelete,product}) {



    return (

        <button className='crudButton deleteButton' onClick={() => fetchDelete(product.id)}>
            <FontAwesomeIcon icon={faTrash} />

        </button>
    )
}


export default DeleteButton
