


import { Link } from 'react-router-dom';

function LinkButton({text,link}) {





    return (


        <Link to={link} style={{ textDecoration: 'none', color: 'inherit'}}>
        <button className='button' >{text}</button>
        </Link>

    )
}

export default LinkButton