
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


function IconAndTextLink({icon, text, link}) {
    return (


        <Link to={link} className="IconAndText">
            <FontAwesomeIcon icon={icon}   />
            <strong>{text} </strong>
        </Link>

    )
}

export default IconAndTextLink