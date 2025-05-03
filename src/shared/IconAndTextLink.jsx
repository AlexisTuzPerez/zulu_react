
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
function IconAndTextLink({icon, text, link}) {
    return (


        <Link to={link} className="IconAndText">
            <FontAwesomeIcon icon={icon}   />
            <strong>{text} </strong>
        </Link>

    )
}

export default IconAndTextLink